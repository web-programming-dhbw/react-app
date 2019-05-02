import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import PitchExact from './PitchExact';
import PitchesCategory from './PitchesCategory';
import { Router }  from 'react-router-dom';
import  Route from 'react-router-dom/Route';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import history from './History';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1alpha1/graphql'
});


class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <Router history = {history}>
      <div className="App">
        <Route path="/" exact strict component={Login}
        />
        <Route path="/home" exact strict component={Home}
        />
        <Route exact path="/pitch/:id" component={PitchExact} />
        <Route exact path="/pitches/:category" component={PitchesCategory} />
      </div>
      </Router>
    </ApolloProvider>
    );
  }
}

export default App;
