// import Counter from './components/Counter'
// import './App.css';
// import { useSyncExternalStore } from 'react';


// // 1. Convert App.js to a class component 
// //   or use a new Component that will be a child of App
// //   2. this.state (constructor) add an empty Array of users
// //   3. Add a button to App component, when onClick render the users on the page

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Counter/>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import users from '.users.json';
import User from "./components/Users";
import Users from "./components/Users";


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  getUsers = () => {
    this.setState({users:myusers})
  }
  render (){
    console.log("users => this.state.users")
    return (
     
      <div>
       
        <button onClick={this.getUsers}>Show Users</button>
 
      </div>

      {
        this.state.users.map(item => {
          return <User data={item} key={item.id}/>
        });
      }
    )
  }
}

export default App