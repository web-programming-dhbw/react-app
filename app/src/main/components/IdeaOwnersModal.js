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
            <h5>Share your ideas with your company!</h5>
            <br/>
            <p style={{textAlign: "justify" }}>
            PitchApp is here to encourage you to share your project ideas with your company and make them happen. All you should do is to post your pitch by giving it a title, describing it briefly and list the resources you need!
            </p>
            <br/>
            <h5>How do we make sure that you idea remains your idea?</h5>
            <br/>
            <p style={{textAlign: "justify" }}>
            For all pitch posted, we automaticly save and display the creation data, like who and when added the certain idea to the dashboard of PitchApp. In this way, in case of a conflict about the origin of a project idea, you can count on us!
            </p>
            <br/>
            <h5>What to be done if your pitch was matched?</h5>
            <br/>
            <p style={{textAlign: "justify" }}>
            If your posted idea was matched, the email address of your future sponsor will be shared with you to take the next steps on the way of make your project idea happen.
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

export default IdeaOwnersModal;
