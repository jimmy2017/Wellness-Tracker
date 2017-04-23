import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addfood from './Addfood'
import Addfooddets from './Addfooddets'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food:[]
      //calorie: "seven",
      //date: null,
    };
  }
  changeFood(f) {
        let food = f[0];
        let calorie = f[1];
        let log = ["food",food,"calorie",calorie]
        this.setState({food:this.state.food.concat(log)
        });
  }
  changeCalorie(c) {
        this.setState({calorie:c});
  }
  changeDate(d) {
    this.setState({date:d})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
          <button name="FoodButton">Food</button>
          <button name="ActivityButton">Activity</button>
          <button name="ReflectionButton">Reflection</button>
          </h2>
        </div>
        <Addfood />
        <Addfooddets changeFood={this.changeFood.bind(this)} changeCalorie={this.changeCalorie.bind(this)}/>

        <ul>food: {this.state.food},calorie: {this.state.calorie},date: {this.state.date}</ul>
      </div>

    );
    }
  }
/*createLog={this.createLog.bind(this)}
   createLog(Log) {
      this.state.food(
          food: Log[1];  )
        this.setState({Log})
      }
    }*/


export default App;
