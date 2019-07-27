import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

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

const POST_MUTATION = gql`
  mutation PitchMutation($category: String!, $owner: String!, $title: String!, $desc: String!, $owner_email: String!, $is_matched: Boolean!, $resources: String!, $creation_timestamp: String!)  {
    insert_pitch(objects: {category: $category, owner: $owner, title: $title, desc: $desc, owner_email: $owner_email, is_matched: $is_matched, resources: $resources, creation_timestamp: $creation_timestamp}) {
      returning {
        category
      creation_timestamp
      desc
      id
      is_matched
      matched_timestamp
      owner
      owner_email
      resources
      sponsor_email
      sponsor_name
      title
      }
    }
  }
  `

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

class AddPitchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      category:'Production',
      desc:'',
      is_matched: false,
      resources: ""
    };

    this.toggle = this.toggle.bind(this);
    this.addPitch = this.addPitch.bind(this);
  }


  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  addPitch(){

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    return (
      
      <div>
        <Button color="success" onClick={this.toggle}>+ Add Pitch</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a new Pitch</ModalHeader>
          <ModalBody>

          <Form>
            <FormGroup>
              <Label for="selectArea">Please select an area of impact</Label>
              <Input type="select" name="select" id="selectArea" onChange={e => this.setState({ category: e.target.value })}>
                <option>Production</option>
                <option>Customer Relationship and Sales</option>
                <option>HR</option>
                <option>Procurement</option>
                <option>R&D</option>
                <option>Finance&Accounting</option>
                <option>Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="title">Please add a title</Label>
              <Input type="textarea" style={{ height: 50 }}name="text" id="title" onChange={e => this.setState({ title: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Please describe your idea</Label>
              <Input type="textarea" style={{ height: 200 }}name="text" id="description" onChange={e => this.setState({ desc: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="resources">Please name the resources needed to realize your idea, think about time, people and material</Label>
              <Input type="textarea" onChange={e => this.setState({ resources: e.target.value })} style={{ height: 150 }} name="text" id="resourcest" />
            </FormGroup>
          </Form>

          </ModalBody>
          <ModalFooter>
          <Mutation mutation={POST_MUTATION} variables={{ category: this.state.category,
             owner:this.props.userName, title:this.state.title, desc:this.state.desc, owner_email: this.props.userEmail, is_matched: this.state.is_matched, resources: this.state.resources, creation_timestamp: new Date().toISOString()}}
             refetchQueries={() => {return [{query: PITCHES_QUERY}, {query: FILTER_QUERY, variables: {email: this.props.userEmail}}]}}>
                {PitchMutation => <Button color="success" onClick={(event) => {PitchMutation(); this.toggle();}}>Submit</Button>}
          </Mutation>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddPitchModal;
