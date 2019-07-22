import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class IdeaSponsorsModal extends React.Component {
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
        <Button color="secondary" onClick={this.toggle}>Idea Sponsors{this.props.buttonLabel}</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Information for Idea Sponsors</ModalHeader>
          <ModalBody>
          <h5>Browse between ideas of your colleagues and offer your sponsorship!</h5>
            <br/>
            <p style={{textAlign: "justify" }}>
            Browse between ideas of your colleagues and offer your sponsorship for the best project to make your company even more successful!
            </p>
            <br/>
            <h5>What happens when you offer your sponsorship?</h5>
            <br/>
            <p style={{textAlign: "justify" }}>
            If you offer sponsorship, you offer the listed resources, which are the part of each pitch. When you click on the Offer Sponsorship button, your registered email address is shown to the idea owner of the respective pitch. Now it is his or her turn to contact you and take the next steps.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>I got it</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default IdeaSponsorsModal;
