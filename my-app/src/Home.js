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
