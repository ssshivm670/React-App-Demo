/**
 * Reducers
 */

export default (state, action) => {
  switch (action.type) {
    case "=":
      return { expression: eval(state.expression) };
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      return { expression: state.expression + action.type };
    case "CE":
      return { expression: "" };
    case "C":
      return {expression: state.expression.slice(0,state.expression.length-1)}
    default:
      return { expression: "" };
  }
};
