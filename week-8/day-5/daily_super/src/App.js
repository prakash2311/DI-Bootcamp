import './App.css';
import React from 'react'
import { data } from './component/data';
import Nav from './component/Nav';



class App extends React.Component{
  constructor () {
    super();
    this.state = {
      all: data,
      score: 0,
      toscore: 0,
      order: [0,1,2,3,4,5,6,7,8,9,10,11]
    }

  }

  mix = (e) => {
    for (let i=0; i<12; i++){
      if (e.target.alt === this.state.all[i].name){
        if (this.state.all[i].clicked === 'true') {
          console.log('game over');
          this.gameover();
        }
        else {
          this.state.all[i].clicked = 'true'
          this.state.score++
        }
      }
      let arr = this.state.order
      for (let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      this.setState({order: arr})
    }
  }
  gameover = () => {
    if (this.state.toscore < this.state.score){
      this.state.toscore = this.state.score 
    }
    this.state.score = 0
    for (let i=0; i<12; i++){
      this.state.all[i].clicked = 'false'
    }
  }

  render () {
   return (
    <>
    <Nav data={this.state}/>
    <div className='nav'>Get points by clicking on an image but don't click on any more than once! </div>
    <div className='cont'>
      {data.map((avg, e) =>{
        let item = this.state.all[this.state.order[e]]
        return (
          <div className='card' onClick={this.mix} key={e}>
            <img src={item.image} alt={item.name} />
            <h5>Name: {item.name}</h5>
            <h5>occupation: {item.occupation}</h5>
          </div>
        )
      })}
    </div>
  
    </>
   )
  }

}

export default App;
