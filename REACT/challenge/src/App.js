import React, { Component } from "react";
// import Input from "./Components/UserInput";
// import Output from "./Components/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    username : ''
  }
  nameChangeHandler = (e) => {
    this.setState({username : e.target.value})
  }
  keyChangeHandler = (e) => {
    this.setState({username : e.target.value})
  }
  render() {
    return <div className="App">
      <input type="text" onChange={this.keyChangeHandler} value={this.state.username} />
      <p>{this.state.username}</p>
      {/* <Input change={this.nameChangeHandler} text={this.state.username} />
      <Output name={this.state.username} />
      <Output name={this.state.username} />
      <Output name={this.state.username} /> */}
    </div>;
  }
}

export default App;
