import React, { Component } from 'react'

import Pitch from '../components/Pitch.js';

import { withAuth } from '@okta/okta-react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import {
  Container,
  Row,
  Col,
  Spinner
} from 'reactstrap';

const FILTER_QUERY = gql`
  query FilterQuery($email: String!) {
    pitch(where: {_or: [{owner_email: {_eq: $email}}, {sponsor_email: {_eq: $email}}]}) {
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

export default withAuth(class MyPitches extends Component {
    render() {
        return (
            <div>
        <Container className="gap">
          <Row>
            <Query query={FILTER_QUERY} pollInterval={500} variables={{email: this.props.userDetails.email}}>
              {({ loading, error, data }) => {
                if (data) console.log(data);
                if (loading) return <Col><Spinner color="primary" /></Col>;
                if (error) return <Col><h4>Cannot connect to the database or to public schema</h4></Col>;

                return (
                  <React.Fragment>
                    {
                      data.pitch.length ? data.pitch.map(pitch => (
                        <Col xl={4} xs={6}>
                          <Pitch userEmail={this.props.userDetails.email} isManager={this.props.userDetails.groups.includes("Managers")} key={pitch.id} pitch={pitch} />
                        </Col>
                      )) : <Col><h4>You have no Pitches yet. Add or sponsor a Pitch to get started</h4></Col>
                    }
                  </React.Fragment>
                );
              }}
            </Query>

          </Row>
        </Container>

      </div>
        )
    }
})
