import React, { Fragment } from 'react';
import AddPitchModal from './AddPitchModal.js';
import Pitch from './Pitch.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import history from './History';

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

  const PITCHES_QUERY = gql`
  query PitchesQuery {
    pitch {
      category
      id
      owner
      title
      desc
    }
  }
`;

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
                  <Link to={`/pitches/Production`}>
                  Production
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/Customer Relationship and Sales`}>
                  Customer Relationship and Sales
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/HR`}>
                  HR
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/Innovation`}>
                  Innovation
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/Procurement`}>
                    Procurement
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/R&D`}>
                    R&D
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/Finance&Accounting`}>
                  Finance&Accounting
                  </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to={`/pitches/Other`}>
                  Other
                  </Link>
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
<Fragment>
<Row>
        <Query query={PITCHES_QUERY} pollInterval={500}>
          {({ loading, error, data }) => {
            if(data) console.log(data);
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
            <Fragment>
              
                {data.pitch.map(pitch => (
                  
                  <Pitch key={pitch.id} pitch={pitch} />
                  
                ))}
              
            </Fragment> 
            );
          }}
        </Query>
        </Row>
  </Fragment>
</Container>

      </div>
    );
  }
}
