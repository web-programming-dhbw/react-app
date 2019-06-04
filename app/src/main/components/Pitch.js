import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Row, Col } from 'reactstrap';

import ShowMore from './ShowMore.js';

const Pitch = (props) => {
  return (
      <Card style={{marginBottom: "40px", height: "350px", overflow: "auto" }}>
        <CardBody>
          <CardTitle style={{ color:'purple', fontWeight:'bold'}} > Idea Title</CardTitle>
          <CardSubtitle style={{ color:'crimson', fontWeight:'bold'}} >Category</CardSubtitle>
          <CardText style={{height: "150px", overflow: "auto", textAlign: "justify" }}>SHORT DESCRIPTION My idea is... Yield management is a variable pricing strategy, based on understanding, anticipating and influencing consumer
            behavior in order to maximize revenue or profits from a fixed.
          </CardText>
          <Row>
            <Col><ShowMore/></Col>
            <Col><Button color ='success' size= "sm">Offer Sponsorship</Button></Col>
          </Row>
        </CardBody>
      <CardFooter>idea_owner@company_email.com</CardFooter>
      </Card>
  );
};

export default Pitch;
