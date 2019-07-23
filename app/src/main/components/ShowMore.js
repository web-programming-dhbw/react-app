import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge, Alert } from 'reactstrap';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}>Show More{this.props.buttonLabel}</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader style={{ paddingBottom: "6px" }} toggle={this.toggle}><span style={{ fontSize: "26px", fontWeight: "bold" }}>{this.props.pitch.title}{this.props.pitch.is_matched ? <Badge style={{marginLeft: "15px"}} color="danger">Matched</Badge> : <span />}</span></ModalHeader>
          <ModalBody>
            {this.props.pitch.is_matched ? <Alert color="danger">
              {`Matched by: ${this.props.pitch.sponsor_name} [ ${this.props.pitch.sponsor_email} ]`}
              <br />
              {`on ${this.props.pitch.matched_timestamp}`}
            </Alert> : <span />}
            <span style={{ fontWeight: "bold" }}>Category</span>
            <ListGroup>
              <ListGroupItem style={{ textAlign: "justify" }}>
                {this.props.pitch.category}
              </ListGroupItem>
            </ListGroup>
            <span style={{ fontWeight: "bold" }}>Description</span>
            <ListGroup style={{ paddingBottom: "10px", paddingTop: "5px" }}>
              <ListGroupItem style={{ textAlign: "justify" }}>
                {this.props.pitch.desc}
              </ListGroupItem>
            </ListGroup>
            <span style={{ fontWeight: "bold" }}>Resources</span>
            <ListGroup style={{ paddingBottom: "15px", paddingTop: "5px" }}>
              <ListGroupItem>
                {this.props.pitch.resources}
              </ListGroupItem>
            </ListGroup>
            <Alert color="primary">
              {`Created by: ${this.props.pitch.owner} [ ${this.props.pitch.owner_email} ]`}
              <br />
              {`on ${this.props.pitch.creation_timestamp}`}
            </Alert>
          </ModalBody>
          <ModalFooter>

          <Mutation mutation={MATCH_PITCH}
          variables={{ id: this.props.pitch.id, is_matched: true, matched_timestamp: new Date().toISOString(), sponsor_name: this.props.userName, sponsor_email: this.props.userEmail}}>
                {offerSponsorship => this.props.isManager && !this.props.pitch.is_matched ? <Button onClick={offerSponsorship} color='success'>Offer Sponsorship</Button> : <span />}
          </Mutation>

          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
