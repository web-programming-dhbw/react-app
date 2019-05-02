import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql`
  mutation PitchMutation($category: String!, $owner: String!, $title: String!, $desc: String!)  {
    insert_pitch(objects: {category: $category, owner: $owner, title: $title, desc: $desc}) {
      returning {
        id
      }
    }
  }
  `


class AddPitchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      owner:'test_user',
      category:'Production',
      desc:'',

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
        <Button color="danger" onClick={this.toggle}>Add Pitch</Button>{' '}
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
              <Input type="textarea" style={{ height: 150 }} name="text" id="resourcest" />
            </FormGroup>
          </Form>

          </ModalBody>
          <ModalFooter>
          <Mutation mutation={POST_MUTATION} variables={{ category: this.state.category,
             owner:this.state.owner, title:this.state.title, desc:this.state.desc}}>
                {PitchMutation => <button onClick={(event) => {PitchMutation(); this.toggle();}}>Submit</button>}
          </Mutation>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddPitchModal;
