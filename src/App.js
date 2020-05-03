import Counter from "./Counter";
import { connect } from "react-redux";
var sProps = (state) => {
  return { count: state.count };
};
var actions = (dispatch) => {
  return {
    inc: () => {
      console.log("inc clicked");
      return dispatch({ type: "inc" });
    },
    dec: () => dispatch({ type: "dec" }),
  };
};
var Connect = connect(sProps, actions)(Counter);
export default Connect;
