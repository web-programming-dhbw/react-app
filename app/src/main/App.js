import React, { Component } from 'react';
import './styles/App.css';

import { BrowserRouter }  from 'react-router-dom';
import  Route from 'react-router-dom/Route';

import Login from './pages/Login.js';
import Home from './pages/Home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/" exact strict component={Login}
        />
        <Route path="/home" exact strict component={Home}
        />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
