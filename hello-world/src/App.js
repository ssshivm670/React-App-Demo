import React, { Component } from "react";
import "./App.css";
import Display from "./Display";
import Keys from "./Keys.js";
class App extends Component {
  constructor() {
    super();
    this.state = { expression: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    if(value=="CE")
      this.setState((state, props) => ({ expression: "" }));
    else if(value=="C"){
      let exp=this.state.expression
      this.setState((state, props) => ({ expression: exp.slice(exp.length-value.length) }));
    }
    this.setState((state, props) => ({ expression: this.state.expression+value }));
    console.log(value);
  }
  render() {
    let keyValues = [1,2,3,4,5,6,7,8,9,0,"/","*","-","+","=","CE","C"];
    let keyIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "divide", "multiply", "subtract", "add", "equals", "clear", "cancel"  ];
    var self = this;
    let keys = keyValues.map(function(name) {
      return (
        <Keys
          value={name}
          key={name}
          id={name}
          handleChange={self.handleChange}
        />
      );
    });

    return (
      <div>
        <h1>Hello </h1>
        <Display expression={this.state.expression} />
        {keys}
      </div>
    );
  }
}

export default App;
