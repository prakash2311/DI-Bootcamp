import { connect } from "react-redux";

const One = (props) => {
  return (
    <>
      <h1>One</h1>
      Display a state from store : {props.one}
    </>
  );
};

const mapStateProps = (state) => {
  return {
    one: state.one_one,
  };
};
export default connect(mapStateProps)(One);