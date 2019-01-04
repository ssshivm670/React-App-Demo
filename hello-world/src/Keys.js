import React, { Component } from 'react';
import './App.css';
class Keys extends Component {
    render (){
      return (
        <div className ="button" id = {this.props.id} onClick={this.onClick}>{this.props.value}</div>
      );
    }
    constructor() {
      super();
      this.onClick = this.update.bind(this);
    }
    
    update(event) {
      const value = event.target.id;
      console.log(value);
      this.props.handleChange(value);
    }
  }

  export default Keys;  