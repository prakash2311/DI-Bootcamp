import React from 'react'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter:0
    }
  }
  add = () => {
    this.setState({counter:this.state.counter+1})
  }
  render(){
    if(this.state.counter >= 5) {
      throw Error('Crached...!!!!')
    }
    return(
      <>
        {this.state.counter}<br/>
        <button onClick={this.add}>Add</button>
      </>
    )
  }
}
export default Counter
