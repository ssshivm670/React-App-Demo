import React,{Component} from 'react';
class Display extends Component {
    render () {
      return (
        <div className ="display">
          <input type="text" name="name" value ={this.props.expression}/>
        </div>
      );
    }
  }

  export default Display;  