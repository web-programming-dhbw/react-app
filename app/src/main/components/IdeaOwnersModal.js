import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class IdeaOwnersModal extends React.Component {
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
        <Button color="secondary" onClick={this.toggle}>Idea Owners{this.props.buttonLabel}</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Information for Idea Owners</ModalHeader>
          <ModalBody>
  <h5>Data we process when you use PitchApp</h5>
  <br/>
  •	When you use your PitchApp account, we store information your company give us like your company email address.
  <br/>
  •	When you use PitchApp to do things like add a new pitch, we store the information you create.
  <br/>
  •	We collect information about the apps, browsers, and devices you use to access our Services by using different types of technology, possibly including cookies, clear gifs, or web beacons.
  <br/>
  <br/>
  <h5>Why we process it</h5>
  <br/>
  We process this data for the purpose of providing our service, including to
  <br/>
  •	Deliver our services and successfully bright ideas with potential project sponsors
  <br/>
  •	Improve security by protecting against copyright issues, fraud and abuse
  <br/>
  •	Send you messages related to the services PitchApp provides.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default IdeaOwnersModal;
