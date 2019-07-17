import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge, Alert } from 'reactstrap';


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
        <ModalHeader style={{paddingBottom: "6px"}} toggle={this.toggle}><span style={{fontSize: "26px", fontWeight: "bold"}}>{this.props.pitch.title}{this.props.pitch.is_matched ? <Badge color="danger">Matched</Badge> : <span/>}</span></ModalHeader>
          <ModalBody>
          {this.props.pitch.is_matched ? <Alert color="danger">
          {`Matched by: ${this.props.pitch.sponsor_name} [${this.props.pitch.sponsor_email}]`}
          <br/>
          {`on ${this.props.pitch.matched_timestamp}`}
    </Alert> : <span/>}          
          <span style={{fontWeight: "bold"}}>Category</span>
          <ListGroup>
            <ListGroupItem style={{textAlign: "justify"}}>
             {this.props.pitch.category}
            </ListGroupItem>
          </ListGroup>
          <span style={{fontWeight: "bold"}}>Description</span>
          <ListGroup style={{paddingBottom: "10px", paddingTop: "5px"}}>
            <ListGroupItem style={{textAlign: "justify"}}>
            {this.props.pitch.desc}
            </ListGroupItem>
          </ListGroup>
          <span style={{fontWeight: "bold"}}>Resources</span>
          <ListGroup style={{paddingBottom: "15px", paddingTop: "5px"}}>
          <ListGroupItem>
          {this.props.pitch.resources}            
            </ListGroupItem>
          </ListGroup>
          <Alert color="primary">
          {`Created by: ${this.props.pitch.owner} [${this.props.pitch.owner_email}]`}
          <br/>
          {`on ${this.props.pitch.creation_timestamp}`}
          </Alert> 
          </ModalBody>
          <ModalFooter>
            {true ? <Button color="success" onClick={this.toggle}>Offer Sponsorship</Button> : ""}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
