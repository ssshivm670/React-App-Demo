import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Screen from "./components/Screen";

class App extends Component {
  render() {
    return (
      <div>
        <Screen />
        <Keypad />
      </div>
    );
  }
}

export default App;
