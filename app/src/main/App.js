import React, { Component } from 'react';
import './styles/App.css';

import { Router, Route, Redirect } from 'react-router-dom';

import history from './components/History';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AppBar from './components/AppBar.js';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';

import PitchExact from './components/PitchExact';
import PitchesCategory from './components/PitchesCategory';

import { Security, ImplicitCallback } from '@okta/okta-react';

import { CookiesProvider } from 'react-cookie';

const config = {
  issuer: 'https://dev-509835.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oao15zo0dc168DZ5356'
}

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1alpha1/graphql'
});

export default class App extends Component {
  state = {
    authenticated: null,
    userDetails: {
      name: "User"
    }
  }

  setAuthenticated = (authenticated) => {
    this.setState({ authenticated: authenticated })
  }

  setUserDetails = (userDetails) => {
    this.setState({ userDetails: userDetails })
  }

  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router history={history}>
            <CookiesProvider>
              <Security issuer={config.issuer}
                client_id={config.client_id}
                redirect_uri={config.redirect_uri}
              >
                <AppBar setAuthenticated={this.setAuthenticated} setUserDetails={this.setUserDetails} authenticated={this.state.authenticated} />
                <Route path='/' exact={true} render={(props) => this.state.authenticated ? <Redirect to='/dashboard' /> : <Home />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
                
                <Route path='/dashboard' render={(props) => this.state.authenticated ? <Dashboard {...props} authenticated={this.state.authenticated} userDetails={this.state.userDetails} /> : <Redirect to='/' />} />

                <Route exact path="/pitch/:id" component={PitchExact} />
                <Route exact path="/pitches/:category" component={PitchesCategory} />
              </Security>
            </CookiesProvider>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}
