import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class KeyButton extends React.Component {
  render() {
  
      const buttonValue = {
      type: this.props.value
    };
    return (
      <div className="key" id={(this.props.id).toString()} onClick={() => this.props.dispatch(buttonValue)}>
        {this.props.value}
      </div>
    );
  }
}

KeyButton.propTypes = {
  value: PropTypes.string.isRequired,
  buttonValue: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
      expression: state.expression,
  }
}
export default connect(mapStateToProps)(KeyButton);

