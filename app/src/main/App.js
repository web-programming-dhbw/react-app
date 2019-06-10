import React, { Component } from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Route, Redirect }  from 'react-router-dom';

import AppBar from './components/AppBar.js';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';

import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-509835.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oao15zo0dc168DZ5356'
}

export default class App extends Component {
  state = {
    authenticated: null,
    userDetails: {
      name: "User"
    }
  }

  setAuthenticated = (authenticated) => {
    this.setState({authenticated: authenticated})
  }

  setUserDetails = (userDetails) => {
    this.setState({userDetails: userDetails})    
  }

  render() {
    return (
      <div className="App">        
        <Router>
          <Security issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={config.redirect_uri}
          >
            <AppBar setAuthenticated={this.setAuthenticated} setUserDetails={this.setUserDetails} authenticated={this.state.authenticated} />
            <Route path='/' exact={true} render={(props) => this.state.authenticated ? <Redirect to='/dashboard' /> : <Home />}/>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
            <Route path='/dashboard' render={(props) => this.state.authenticated ? <Dashboard {...props} authenticated={this.state.authenticated} userDetails={this.state.userDetails} /> : <Redirect to='/' />}/>
          </Security>
      </Router>
    </div>
    );
  }
}
