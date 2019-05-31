import React, { Component } from 'react';
import './App.css';

import { BrowserRouter }  from 'react-router-dom';
import  Route from 'react-router-dom/Route';

import Login from './main/pages/Login.js/index.js.js';
import Home from './main/pages/Home.js/index.js.js';

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
