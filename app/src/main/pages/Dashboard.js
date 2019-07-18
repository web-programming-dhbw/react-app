import React, { Component } from 'react'

import AddPitchModal from '../components/AddPitchModal.js';
import Pitch from '../components/Pitch.js';

import { withAuth } from '@okta/okta-react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
  Col,
  Spinner
} from 'reactstrap';

let category = null;

const PITCHES_QUERY = gql`
  query PitchesQuery($category: String!) {
    pitch(where: {category: {_eq: $category}}) {
      id
      is_matched
      matched_timestamp
      owner
      owner_email
      resources
      sponsor_email
      sponsor_name
      title
      desc
      creation_timestamp
      category
    }
  }
`;

export default withAuth(class Dashboard extends Component {
  state = {
    isCollapseOpen: false
  }

  showPithches = (error, data) => {
    if(!error) {
      return data.pitch.map(pitch => (
        <Col xl={4} xs={6}>
          <Pitch key={pitch.id} pitch={pitch} />
        </Col>
      ))
    } else {
      return <Col><h4>Cannot connect to the database or to public schema</h4></Col>
      }
  }

  toggleCollapse = () => {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen })
  }

  selectCatagory = (event) => {
    category = event.target.innerText
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
                          Show All Pitches
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.selectCatagory}>
                          Production
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
                          Customer Relationship and Sales
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
                          HR
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
                          Procurement
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
                          R&D
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
                          Finance&Accounting
                        </DropdownItem>
                        <DropdownItem onClick={this.selectCatagory}>
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

            <Query query={PITCHES_QUERY} pollInterval={500} variables={{category}}>
              {({ loading, error, data }) => {
                if (data) console.log(data);
                if (loading) return <Col><Spinner color="primary" /></Col>;
                if (error) console.log(error);

                return (
                  <React.Fragment>
                      {this.showPithches(error, data)}
                  </React.Fragment>
                );
              }}
            </Query>

          </Row>
        </Container>

      </div>
    );
  }
})
