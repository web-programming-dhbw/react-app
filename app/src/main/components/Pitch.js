import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Row, Col, Badge } from 'reactstrap';
import ShowMore from './ShowMore.js';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

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

const MATCH_PITCH = gql`
  mutation($id: Int!, $is_matched: Boolean!, $sponsor_name: String!, $sponsor_email: String!, $matched_timestamp: String!) {
    update_pitch(where: {id: {_eq: $id}}, _set: {is_matched: $is_matched, matched_timestamp: $matched_timestamp, sponsor_email: $sponsor_email, sponsor_name: $sponsor_name}) {
      returning {
        id
        is_matched
        matched_timestamp
        sponsor_email
        sponsor_name
      }
    }
  }
`;

const DELETE_PITCH = gql`
  mutation($id: Int!) {
    delete_pitch(where: {id: {_eq: $id}}) {
      returning {
        id
      }
    }
  }
`;

export default class Pitch extends Component {
  state = {
    deleteSuccessful: null
  }

  render() {
  return (
    <Card style={{ marginBottom: "40px", height: "400px", overflow: "auto" }}>
      <CardBody style={{ paddingBottom: "15px" }}>
        {this.props.pitch.is_matched ? <Badge color="danger">Matched</Badge> : <Badge>Unmatched</Badge>}
        <CardTitle style={{ marginBottom: "0px", fontSize: "22px", fontWeight: "bold" }}>{this.props.pitch.title}</CardTitle>
        <CardSubtitle style={{ marginBottom: "15px" }} className="text-muted">{this.props.pitch.category}</CardSubtitle>
        <CardText style={{ marginBottom: "5px", overflow: "hidden", height: "130px", textAlign: "justify" }}>
          {this.props.pitch.desc.substring(0, 195) + "..."}
        </CardText>
        <Row>
          <Col><ShowMore pitch={this.props.pitch} isManager={this.props.isManager} /></Col>

          <Mutation mutation={MATCH_PITCH}
          variables={{ id: this.props.pitch.id, is_matched: true, matched_timestamp: new Date().toISOString(), sponsor_name: this.props.userName, sponsor_email: this.props.userEmail}}>
                {offerSponsorship => this.props.isManager && !this.props.pitch.is_matched ? <Col><Button onClick={offerSponsorship} color='success' size="sm">Offer Sponsorship</Button></Col> : <span />}
          </Mutation>

          <Mutation mutation={DELETE_PITCH} variables={{ id: this.props.pitch.id}}
          refetchQueries={() => {return [{query: PITCHES_QUERY}]}}>
                {deletePitch => this.props.userEmail === this.props.pitch.owner_email ? <Col><Button onClick={deletePitch} color='danger' size="sm">Delete Pitch</Button></Col> : <span />}
          </Mutation>

        </Row>
      </CardBody>
      <CardFooter style={{ fontWeight: "bold" }}>
        {this.props.pitch.owner}
        <br />
        {this.props.pitch.owner_email}
      </CardFooter>
    </Card>
  );
          }
}
