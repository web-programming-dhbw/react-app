import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddPitchModal extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>Add Pitch</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a new Pitch</ModalHeader>
          <ModalBody>

          <Form>
            <FormGroup>
              <Label for="selectArea">Please select an area of impact</Label>
              <Input type="select" name="select" id="selectArea">
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
              <Input type="textarea" style={{ height: 50 }}name="text" id="title" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Please describe your idea</Label>
              <Input type="textarea" style={{ height: 200 }}name="text" id="description" />
            </FormGroup>
            <FormGroup>
              <Label for="resources">Please name the resources needed to realize your idea, think about time, people and material</Label>
              <Input type="textarea" style={{ height: 150 }} name="text" id="resourcest" />
            </FormGroup>
          </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddPitchModal;
