import React, { Component } from 'react'

import AddPitchModal from '../components/AddPitchModal.js';
import Pitch from '../components/Pitch.js';

import { withAuth } from '@okta/okta-react';

import {
  NavbarToggler,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col
} from 'reactstrap';

export default withAuth(class Dashboard extends Component {
  state = {
    isCollapseOpen: false,
    pitches: [{}, {}, {}, {}, {}, {}]
  }

  toggleCollapse = () => {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen })
  }

  getPitches = () => {
    // Using authToken get pitches for user from Database
  }

  displayPitches = () => {
    let pitchObjects = []

    let i = 0;
    for (let pitch of this.state.pitches) {
      pitchObjects.push(
        <Col key={i++}>
          <Pitch />
        </Col>
      )
    }

    return pitchObjects
  }

  render() {
    return (
      <div>
        <Container className="gap">
          <Row>
            <Navbar expand="md" light style={{ width: "100%" }}>
              <NavbarBrand>Welcome, {this.props.userDetails["name"]}!</NavbarBrand>
              <NavbarToggler onClick={this.toggleCollapse} />
              <Collapse isOpen={this.state.isCollapseOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav caret>
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
                  </NavItem>
                  <NavItem>
                    <AddPitchModal />
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Row>
          <Row>

            {this.displayPitches()}

          </Row>
        </Container>

      </div>
    );
  }
})
