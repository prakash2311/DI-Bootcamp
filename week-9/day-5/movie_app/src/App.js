import './App.css';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
        {<Navbar />}
        <Routes>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
        </Routes>
        {<Footer />}
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
