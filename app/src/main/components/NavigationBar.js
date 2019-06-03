import React from 'react';
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
import { Link } from 'react-router-dom';
import history from './History';
import AddPitchModal from './AddPitchModal';

export default class NavigationBar extends React.Component {
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
          <NavbarBrand href='/home' style={{ color:'white' }} >
          Welcome to PitchApp
          </NavbarBrand>
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
                  <NavLink href={`/pitches/Production`}>
                  Production
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/Customer Relationship and Sales`}>
                  Customer Relationship and Sales
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/HR`}>
                  HR
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/Procurement`}>
                    Procurement
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/R&D`}>
                    R&D
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/Finance&Accounting`}>
                  Finance&Accounting
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={`/pitches/Other`}>
                  Other
                  </NavLink>
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
      </div>
    );
  }
}