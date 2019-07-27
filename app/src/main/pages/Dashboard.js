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

const FILTER_QUERY = gql`
  query FilterQuery($category: String!) {
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

const PITCHES_QUERY = gql`
  query PitchesQuery {
    pitch {
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
    isCollapseOpen: false,
    category: null
  }

  toggleCollapse = () => {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen })
  }

  selectCatagory = (event) => {
    this.setState({ category: event.target.innerText })
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
                        <DropdownItem onClick={() => { this.setState({ category: null }) }}>
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
                    {this.props.userDetails.groups.includes("Employees") ? <AddPitchModal userName={this.props.userDetails.name} userEmail={this.props.userDetails.email} /> : <span />}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Row>
          <Row>
            <Query query={this.state.category == null ? PITCHES_QUERY : FILTER_QUERY} pollInterval={500} variables={this.state.category == null ? {} : { category: this.state.category }}>
              {({ loading, error, data }) => {
                if (loading) return <Col><Spinner color="primary" /></Col>;
                if (error) return <Col><h4>Cannot connect to the database or to public schema</h4></Col>;

                return (
                  <React.Fragment>
                    {
                      data.pitch.length ? data.pitch.map(pitch => (
                        <Col key={pitch.id} xl={4} xs={6}>
                          <Pitch userEmail={this.props.userDetails.email} userName={this.props.userDetails.name} isManager={this.props.userDetails.groups.includes("Managers")} pitch={pitch} />
                        </Col>
                      )) : <Col><h4>No Pitches have been added yet. Add a Pitch to get started</h4></Col>
                    }
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
