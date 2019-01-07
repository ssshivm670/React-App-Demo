import React, { Component } from "react";
import KeyButton from "./KeyButton";
class Keypad extends Component {
  render() {
    let keyValues = [1,2,3,4,5,6,7,8,9,0,'/','*','.','-','+','=','CE','C'];
    let keyIDs = ['one','two','three','four','five','six','seven','eight','nine','zero','divide','multiply','decimal','subtract','add','equals','clear','cancel'];
    // let keys=keyValues.map(function(name){
    //     return <KeyButton value = {name}/>;
    // });
    let keys = [];
    for(var i = 0;i<keyValues.length;i++){
      keys.push(<KeyButton id={keyIDs[i]} value = {keyValues[i]}/>);
    }

    return (
      <div>
        {keys}
      </div>
    );
  }
}

export default Keypad;
