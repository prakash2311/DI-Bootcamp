import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {add,min,addodd,addasyn} from './redux/actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    const {add,min,addodd,addasyn,state}=this.props
    return (
      <>
          Clicked: {state} times
       <button onClick={add}>+</button>
       <button onClick={min}>-</button>
       <button onClick={addodd}>Increment if odd</button>
       <button onClick={addasyn}>Increment async</button>
      </>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     value:state
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return{
    add: () => dispatch(add()),
    min: () => dispatch(min()),
    addodd: () => dispatch(addodd()),
    addasyn: () => dispatch(addasyn()),
  }
}
export default connect(mapDispatchToProps)(App);
