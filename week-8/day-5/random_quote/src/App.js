import React from 'react';
import  quotes  from './components/QuotesDatabase';
import { colors } from './components/color';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      Object: '',
      bgcol:'',
    }
  }
  componentDidMount(){
    this.getquate()
    this.getcolor()
  }

  getquate = () => {
    let rnd = Math.floor(Math.random() * 60)
    this.setState({Object: quotes[rnd]})
    this.getcolor()
  }

  getcolor = () => {
    let rnd = Math.floor(Math.random() * 50)
    this.setState({bgcol:colors[rnd]})
  }
  render(){
    let col = this.state.bgcol

    return(
      <div style={{background: col}}>  
       <style>{`body {background-color: ${col};}`}</style>
       <div id="box" style={{ backgroundColor: 'white', color: `${col}` }}>
         <h1 id='quote'>"{this.state.Object.quote}"</h1>
         <h3 id='author'>-{this.state.Object.author}-</h3>
         <button id='name' style={{backgroundColor: col, color: 'white'}} onClick={this.getquate}>New Quote</button>
       </div>
      </div>
    )
  }
}

export default App;
