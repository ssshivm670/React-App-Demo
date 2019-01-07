import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    /*FETCHING COUNTER FROM STATE USING PROPS*/
    const { counter } = this.props;

    // ACTION DECLARATION
    const incrementAction = {
      type: "INCREMENT"
    };
    const decrementAction = {
      type: "DECREMENT"
    };

    return (
      <div>
        <p>This is a counter</p>
        {/* DISPATCHING ACTIONS ON CLICK */}
        <button onClick={() => this.props.dispatch(incrementAction)}>
          {" "}
          +
        </button>{" "}
        <button onClick={() => this.props.dispatch(decrementAction)}>
          {" "}
          -
        </button>{" "}
        <span>{counter}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
export default connect(mapStateToProps)(Counter);
