import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import { BrowserRouter }  from 'react-router-dom';
import  Route from 'react-router-dom/Route';

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
