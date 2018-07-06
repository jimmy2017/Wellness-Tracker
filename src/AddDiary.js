import React, { Component } from 'react';
import './App.css';
import './Addlog.css'
import NumericInput from 'react-numeric-input';
import Webcam from './webcam'

class AddDiary extends Component {
  handleChange(e) {
    e.preventDefault();
    let reflection = this.refs.createReflection.value;
    let date = this.refs.createDate.value;
    this.refs.createReflection.value = "How are you feeling today?";
    this.refs.createDate.value = null;
    let pic = this.props.state.screenshot;
    if (reflection && date){
    let log = [reflection,date,pic]
    this.props.AddDiary(log);}
}

screenshot() {
  var screenshot = this.refs.webcam.getScreenshot();
  this.props.AddScreenshot(screenshot);
}


  render() {

    return(
      <div className="inputBox">
        <form onSubmit={this.handleChange.bind(this)}>
          <label>
          <h3> Journal about your day</h3>
          <textarea rows="4" cols="50" ref="createReflection" id = "textbox">
          How are you feeling today?
          </textarea>
          <Webcam ref='webcam'/>
            <span className='screenshots'>
              <span className='controls'>
              <button id="captureButton" onClick={this.screenshot.bind(this)}>capture</button>
              </span>
              { this.props.state.screenshot ? <img src={this.props.state.screenshot} /> : null }
            </span>
          Date:
          <input type="date" name="Date" ref="createDate" id="dateBox"/>
          <input type="submit" id="addButton"/>
          </label>
        </form>
      </div>
    );
    }
}
/*
    this.props.createLog(this.refs.createFood.value);
    this.refs.createFood.value='';
    this.refs.createCalorie.value='';
    this.refs.createDate.value='';
    }
  handleCalorie(event) {
    const cal = event.target.value;
    this.props.changeCalorie(cal);
    event.preventDefault();
    }
  }

  handleDate(event) {
    const date = event.target.value;
    this.props.changeCalorie(date);
    event.preventDefault();
  }*/





export default AddDiary;
