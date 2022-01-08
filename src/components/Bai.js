import React from 'react';
import { connect } from 'react-redux';
import {downloadModel, loadingModel, predict} from '../actions'
import ProgressBar from "./subcomponents/ProgressBar";
//import { Link } from 'react-router-dom';
import './css/Bai.css';


class Bai extends React.Component {
  /**
   * Blank AI - Artificial Intelligence designed to distinguish photos of blank vs. non-blank paper scans
   */

  classes = {0: "Blank", 1: "Not Blank"}

  componentDidMount () {
    document.title = "Blank AI";
  }

  async fileUpload (target, predict) {

    const [file] = target.files;

    let image = document.getElementById("preview")  

    if (file) {

        let imageBM = await createImageBitmap(file);
        
        let prediction = await predict(imageBM);
        
        console.log(this.declassify(prediction[0]));

        image.src = await URL.createObjectURL(file);
        image.classList.add('show');
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
            <button className={this.props.loading?"hide":""} onClick={()=>{this.props.loadingModel();this.props.downloadModel()}}>Accept Download</button>
            <h2>{this.props.loading}</h2>
            <ProgressBar progress={this.props.downloadProgress}/>
            <h2>{this.props.loading?this.props.downloadProgress+"%":""}</h2>
        </div>
        )
        :(
        <div className="content">
            <h1>BAI Model Prediction</h1>

            <p className="prediction">{this.props.last_prediction ? this.declassify(this.props.last_prediction[0]):"Waiting for Prediction"}</p>
        
            <img id="preview" alt="preview of predicted file"/>

            <input type='file' id="fileSubmit" onChange={({target}) => this.fileUpload(target, this.props.predict)} />

            <button onClick={()=>{document.getElementById('fileSubmit').click();}}>Upload Image</button>
            
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
  return {model: state.model.model, loading: state.model.loading, last_prediction: state.model.last_prediction, downloadProgress: state.model.progress};
}

export default connect(mapStateToProps, {downloadModel, loadingModel, predict})(Bai);
