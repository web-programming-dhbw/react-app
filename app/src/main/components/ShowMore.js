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
        <ModalHeader style={{paddingBottom: "6px"}} toggle={this.toggle}><span style={{fontSize: "26px", fontWeight: "bold"}}>Idea Title <Badge color="secondary">Category</Badge></span></ModalHeader>
          <ModalBody>
          <span style={{fontWeight: "bold"}}>Description</span>
          <ListGroup style={{paddingBottom: "10px", paddingTop: "5px"}}>
            <ListGroupItem style={{textAlign: "justify"}}>
              Yield management is a variable pricing strategy, based on understanding, 
              anticipating and influencing consumer
              behavior in order to maximize revenue or profits from a fixed.
            </ListGroupItem>
          </ListGroup>
          <span style={{fontWeight: "bold"}}>Resources</span>
          <ListGroup style={{paddingBottom: "15px", paddingTop: "5px"}}>
          <ListGroupItem>...</ListGroupItem>
          </ListGroup>
          <span className="text-muted">Created by John Smith [ idea_owner@company_email.com ]</span>
          <br/>
          <span className="text-muted">on 2019 June 06 13:16:50</span>
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
