import React from 'react';
import AddPitchModal from './AddPitchModal.js';
import Pitch from './Pitch.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render() {
    return (
      <div>
        <Navbar color="primary" light expand="lg">
          <NavbarBrand style={{ color:'white' }} >Welcome to PitchApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AddPitchModal/>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color:'white' }}>
                  Search Pitches by Area
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Production
                  </DropdownItem>
                  <DropdownItem>
                    Customer Relationship and Sales
                  </DropdownItem>
                  <DropdownItem>
                    HR
                  </DropdownItem>
                  <DropdownItem>
                    Procurement
                  </DropdownItem>
                  <DropdownItem>
                    R&D
                  </DropdownItem>
                  <DropdownItem>
                    Finance&Accounting
                  </DropdownItem>
                  <DropdownItem>
                    Other
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color:'white' }}>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    View my Pitches
                  </DropdownItem>
                  <DropdownItem>
                    View my Notis
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
<Container className="gap">
  <Row>

    <Col>
      <Pitch/>
    </Col>

    <Col>
      <Pitch/>
    </Col>

    <Col>
      <Pitch/>
    </Col>

  </Row>
</Container>

      </div>
    );
  }
}
