import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge } from 'reactstrap';

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
        <Button color="primary" size= "sm" onClick={this.toggle}>Show More{this.props.buttonLabel}</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader style={{ color:'purple'}} toggle={this.toggle}><h4>My Idea Title <Badge color="danger">Category</Badge></h4></ModalHeader>
          <ModalBody>
          created by idea_owner@company_email.company_email
          Discription
          <ListGroup>
          <ListGroupItem>... </ListGroupItem>
          </ListGroup>
          Resources
          <ListGroup>
          <ListGroupItem>...</ListGroupItem>
          </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Offer Sponsorship</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
