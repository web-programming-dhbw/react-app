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
  Col
} from 'reactstrap';

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

export default withAuth(class Dashboard extends Component {
  state = {
    isCollapseOpen: false
  }

  toggleCollapse = () => {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen })
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

            <Query query={PITCHES_QUERY} pollInterval={500}>
              {({ loading, error, data }) => {
                if (data) console.log(data);
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
        </Container>

      </div>
    );
  }
})