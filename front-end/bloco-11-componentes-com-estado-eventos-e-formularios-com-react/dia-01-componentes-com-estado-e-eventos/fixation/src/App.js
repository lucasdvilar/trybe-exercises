import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState((previousState, _prop) => ({
      button1: previousState.button1 + 1
    }), () => console.log(this.changeColor(this.state.button1)))
  }
  
  handleClick2() {
    this.setState((previousState, _prop) => ({
      button2: previousState.button2 + 1
    }), () => console.log(this.changeColor(this.state.button2)))
  }
  
  handleClick3() {
    this.setState((previousState, _prop) => ({
      button3: previousState.button3 + 1
    }), () => console.log(this.changeColor(this.state.button3)))
  }

  changeColor(num) {
    if (num % 2 === 0) {
      return 'green';
    } else {
      return 'grey';
    }
  }
  
  render() {
    return (
      <div>
      <button onClick={this.handleClick1} className={this.changeColor(this.state.button1)}>{this.state.button1}</button>
      <button onClick={this.handleClick2} className={this.changeColor(this.state.button2)}>{this.state.button2}</button>
      <button onClick={this.handleClick3} className={this.changeColor(this.state.button3)}>{this.state.button3}</button>
    </div>
    );
  }
}

export default App;

