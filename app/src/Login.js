import React, { Component } from 'react';
import './App.css';

import GDPRModal from './GDPRModal.js';
import LoginJumbotron from './LoginJumbotron.js';

import { InputGroup, InputGroupAddon, Input, Button, Container, Row, Col } from 'reactstrap';


class Login extends Component {
  render() {
    return (

<div className="Login">

  <LoginJumbotron/>
    <Container>
        <Row>
          <Col xs="1" sm="2" md="3" lg="4">
          </Col>
          <Col xs="auto" sm="auto" md="auto" lg="auto">
            <InputGroup>
            <Input type= "email" placeholder="username" />
            <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
            <Input type="password" placeholder="password" />
            </InputGroup>
          </Col>
          <Col xs="1" sm="2" md="3" lg="4">
          </Col>
      </Row>
      <Row>
        <br />
      </Row>
      <Row>
          <Col>
            <Button color="primary" href="/home">Login</Button>{' '}
          </Col>
      </Row>
      <Row>
        <br />
        <br />
      </Row>
      <Row>
          <Col>
            <GDPRModal/>
          </Col>
      </Row>
  </Container>

</div>

    );
  }
}

export default Login;
