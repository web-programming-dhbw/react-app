import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class GDPRModal extends React.Component {
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
        <Button color="info" onClick={this.toggle}>Privacy Policy{this.props.buttonLabel}</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Data Privacy Policy of PitchApp</ModalHeader>
          <ModalBody>
  <h5>Data we process when you use PitchApp</h5>
  <br/>
  <p style={{textAlign: "justify" }}>
  •	When you use your PitchApp account, we store the information that you gave us, e.g. your company email address and your user name.
  <br/>
  •	When you use PitchApp to share your ideas by creating a new pitch, we store all the information you enter and the time of your action.</p>
  <br/>
  <h5>Why we process your data</h5>
  <br/>
  <p style={{textAlign: "justify" }}>We process your data for the purpose of providing our service, which includes:
  <br/>
  • providing a platform for sharing your bright ideas with potential project sponsors,
  <br/>
  •	providing a platform for collecting ideas of collegues and increase intrapreneurship in your company,
  <br/>
  • protecting you and your ideas against copyright issues, fraud and abuse,
  <br/>
  • and granting you a secure user account.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>I got it</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GDPRModal;
