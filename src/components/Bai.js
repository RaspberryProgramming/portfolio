import React from 'react';
import { connect } from 'react-redux';
import {downloadModel, loadingModel, predict} from '../actions'
//import { Link } from 'react-router-dom';
import './css/Bai.css';


class Bai extends React.Component {
  /**
   * 
   */

  classes = {0: "Blank", 1: "Not Blank"}

  componentDidMount () {
    document.title = "Blank AI";
  }

  async fileUpload ({target}) {
    console.log(target);
    const [file] = target.files;
    let image = document.getElementById("preview")  

    if (file) {
        image.src = await URL.createObjectURL(file);        
    }
  }

  async imagePredict (model) {
    let image = document.getElementById("preview");
    console.log(image.src);
    if (image.src !== "") {
        let prediction = await this.props.predict(image);
        console.log(prediction[0]);
        console.log(this.declassify(prediction[0]));
    }
  }

  declassify(prediction) {
      if (prediction > 0.5) {
          return this.classes[1];
      } else {
          return this.classes[0];
      }
  }

  render() {
    
    let content = (this.props.model === null)?
        (
        <div className="content">
            <h1>Would you like to download the model?</h1>
            <p>By clicking Accept below, you will download the model which may be between 100 mb in size to 1 gb.</p>
            <button onClick={()=>{this.props.loadingModel();this.props.downloadModel()}}>Accept</button>
            <h2>{this.props.loading}</h2>
        </div>
        )
        :(
        <div className="content">
            <h1>BAI Model Prediction</h1>
        
            <img id="preview" src="" alt="preview of predicted file" onLoad={()=>{this.imagePredict(this.props.model)}}/>

            <input type='file' id="fileSubmit" onChange={this.fileUpload} />

            <button onClick={()=>{document.getElementById('fileSubmit').click();}}>Upload Image</button>
            
            <p className="prediction">{this.props.last_prediction ? this.declassify(this.props.last_prediction[0]):"Waiting for Prediction"}</p>
        </div>
        );

    return (
        <div className="Bai">
            {content}
            <h1>About</h1>
            <p> You can find the source, dataset and model created for BAI on github at 
                <a href="https://www.github.com/RaspberryProgramming/BAI"> https://www.github.com/RaspberryProgramming/BAI</a>
            </p>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {model: state.model.model, loading: state.model.loading, last_prediction: state.model.last_prediction};
}

export default connect(mapStateToProps, {downloadModel, loadingModel, predict})(Bai);
