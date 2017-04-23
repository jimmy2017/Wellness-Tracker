import React, { Component } from 'react';
import './App.css';

class Addfooddets extends Component {
  render() {
    //this.props.changeFood("di");
    return(
      <div>
        <form>
          <label>
          Food:
          <input onChange={this.handleChange.bind(this)} type="text" name="Food" ref="createFood"/>
          Calorie:
          <input onChange={this.handleChange.bind(this)} type="text" name="Calorie" ref="createCalorie"/>
          Date:
          <input type="text" name="Date" ref="createDate"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    }
  handleChange(event) {
    event.preventDefault();
    let food = this.refs.createFood.value;
    let cal = this.refs.createCalorie.value;
    const date = this.refs.createDate.value;
    let log = [food,cal,date]
    this.props.changeFood(log+"|");
    this.props.changeCalorie(cal);
    this.props.changeDate(cal);

    console.log(this.refs.createFood.value,this.refs.createCalorie.value,this.refs.createDate.value);
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
  }
}





export default Addfooddets;
