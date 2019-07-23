import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, Button, Nav, NavItem, Media } from 'reactstrap';
import { withAuth } from '@okta/okta-react';
import logo from "../images/logo_without_text.png"


export default withAuth(class AppBar extends Component {
  constructor(props) {
    super(props);
    this.checkAuthentication();
    this.getUserDetails()
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.props.authenticated) {
      this.props.setAuthenticated(authenticated);
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
    this.getUserDetails()
  }

  login = async () => {
    // Redirect to '/dashboard' after login
    this.props.auth.login('/dashboard');
  }

  logout = async () => {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  getUserDetails = () => {
    this.props.auth.getUser().then((userDetails) => { this.props.setUserDetails(userDetails ? userDetails : { name: "User", groups: [], email: "" }) })
  }

  render() {
    return (
      <div className="AppBar">
        <Navbar color="primary" expand="xs" light>
          <Link to={this.props.authenticated ? "/dashboard" : "/"}>
            <Media left>
              <Media style={{ width: "52px" }} object src={logo} alt="PitchApp's logo with a rocket in a brain" />
            </Media>
          </Link>
          <NavbarBrand style={{ color: 'white' }} >PitchApp</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/mypitches">
                <Button color="primary" onClick={this.props.authenticated ? () => {} : this.login}>My Pitches</Button>{' '}
              </Link>
            </NavItem>
            <NavItem>
              {this.props.authenticated ? <Button onClick={this.logout} color="danger">Logout</Button> : <Button onClick={this.login} color="success">Login</Button>}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
})
