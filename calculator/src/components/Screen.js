import React, { Component } from "react";
import { connect } from "react-redux";

class Screen extends Component{
    render(){
        const {expression} = this.props;
        return <span className="display">
            {expression}
        </span>;
    }
}

function mapStateToProps(state) {
    return {
      expression: state.expression
    };
  }

export default connect(mapStateToProps)(Screen);