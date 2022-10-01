import React from 'react';
import { connect } from 'react-redux';
import {setModelProgress, loadingModel, dadJokesPredict, error_msg} from '../actions'
import ProgressBar from "./subcomponents/ProgressBar";
//import { Link } from 'react-router-dom';
import './css/AIPages.css';
import * as tf from '@tensorflow/tfjs';


class DadjokesAI extends React.Component {
  /**
   * Blank AI - Artificial Intelligence designed to distinguish photos of blank vs. non-blank paper scans
   */
  model;

  componentDidMount () {
    document.title = "Dad Jokes AI";
  }

  extExtractor (filename) {
    let name = filename.split('.');
    let ext = name[name.length-1];
    return ext
  }

  async fileUpload (target, predict) {

    const [file] = target.files;

    let image = document.getElementById("preview")  

    let image_ext = ['jpg', 'png'];

    let file_ext = await this.extExtractor(file.name);

    if (file && image_ext.includes(file_ext)) {

        let imageBM = await createImageBitmap(file);
        
        let prediction = await predict(imageBM);
        
        console.log(this.declassify(prediction[0]));

        image.src = await URL.createObjectURL(file);
        image.classList.add('show');
    } else {
      this.props.error_msg('Please pass JPG or PNG file Only');
    }
  }

  declassify(prediction) {
      if (prediction > 0.5) {
          return this.classes[1];
      } else {
          return this.classes[0];
      }
  }

  async downloadModel (modelUrl, modelType) {
    let options = {
      onProgress: (p)=>{
        this.props.setModelProgress(p);
      }
    }
  
    if (modelType === "graph") {
      this.model = await tf.loadGraphModel(modelUrl, options);
    } else if (modelType === "layers") {
      this.model = await tf.loadLayersModel(modelUrl, options); // Load Model
    } else {
      this.model = null;
    }

    await this.props.setModelProgress(0);
    console.log(this.model);
    
  }

  render() {
    let content = (this.model === undefined)?
        (
        <div className="content">
            <h1>Would you like to download the model?</h1>
            <p>By clicking Accept below, you will download the model which may be between 100 mb in size to 1 gb.</p>
            <p>You also accept that the model is generated based off of unfiltered data which may have been trained with any words available to the human language.</p>
            <button className={`btn ${this.props.loading?"hide":""}`} onClick={()=>{this.props.loadingModel();this.downloadModel('/dadjokes_model/model.json', 'graph')}}>Accept Download</button>
            <h2>{this.props.loading}</h2>
            <ProgressBar progress={this.props.downloadProgress}/>
            <h2>{this.props.loading?this.props.downloadProgress+"%":""}</h2>
        </div>
        )
        :(
        <div className="content">
            <h1>BAI Model Prediction</h1>

            <p className="prediction">{this.props.last_prediction ? this.props.last_prediction[0]:"Waiting for Joke"}</p>
            
            <div className={"error " + (this.props.error?'enable':'')}>
              {this.props.error}
            </div>

            <button className='btn' onClick={()=>{this.props.dadJokesPredict(this.model)}}>Generate New Dad Joke</button>
            
        </div>
        );

    return (
        <div className="AIPage">
            {content}
            <div className="about">
                <h1>About</h1>
                <p>Note: This is a model with a small dataset, additional data is currently being collected, and will be used to retrain sometime soon. The current model will likely produce random babbling.</p>
                <p>
                    The model used in this page was based on the pretrained model GPT-2. You can find more information on openAI's site at <a href="https://openai.com/blog/tags/gpt-2/">https://openai.com/blog/tags/gpt-2/</a>
                </p>
                <p>
                    The dataset that was used to retrain the model can be found at the following link
                    <a href="https://www.kaggle.com/datasets/camerinfigueroa/rdadjokes">https://www.kaggle.com/datasets/camerinfigueroa/rdadjokes</a>
                </p>
                <p>
                    The following Google Colab link will bring you to the notebook used to retrain GPT-2 with out dataset
                    <a href="https://colab.research.google.com/drive/1VLG8e7YSEwypxU-noRNhsv5dW4NfTGce">Google Colab</a>
                </p>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {model: state.model.model, loading: state.model.loading, last_prediction: state.model.last_prediction, downloadProgress: state.model.progress, error: state.model.error};
}

export default connect(mapStateToProps, {setModelProgress, loadingModel, dadJokesPredict, error_msg})(DadjokesAI);
