import {connect} from 'react-redux';
import {increase,decrease} from '../actions'

const Counter = (props) => {
  return(
    <>
      <h2>Counter</h2>
      <button onClick={
        () => { props.d(); props.e(props.c); }
    }>-</button>
      {props.c}
      <button onClick={()=>{
        props.i();
        props.e(props.c);
      }}>+</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    c: state.counter_reducer.count,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    i: () => dispatch(increase()),
    d: () => dispatch(decrease()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
