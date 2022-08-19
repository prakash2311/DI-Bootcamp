
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
  
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

