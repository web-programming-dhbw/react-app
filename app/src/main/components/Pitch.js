import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Row, Col, Badge} from 'reactstrap';
import ShowMore from './ShowMore.js';

export default function Pitch({
  pitch: {id, title, owner, category, desc}
}){
  return (
      <Card style={{marginBottom: "40px", height: "400px", overflow: "auto" }}>
        <CardBody style={{paddingBottom: "15px"}}>
          <Badge color="danger">Matched</Badge>
          <CardTitle style={{marginBottom: "0px", fontSize: "22px", fontWeight: "bold"}}>Idea Title</CardTitle>
          <CardSubtitle style={{marginBottom: "15px"}} className="text-muted">Category</CardSubtitle>
          <CardText style={{marginBottom: "5px", overflow: "auto", height: "150px", textAlign: "justify" }}>
            Yield management is a variable pricing strategy, based on understanding, 
            anticipating and influencing consumer
            behavior in order to maximize revenue or profits from a fixed.
          </CardText>
          <Row>
            <Col><ShowMore/></Col>
            <Col><Button color ='success' size= "sm">Offer Sponsorship</Button></Col>
          </Row>
        </CardBody>
      <CardFooter style={{fontWeight: "bold"}}>
        John Smith
        idea_owner@company_email.com</CardFooter>
      </Card>
  );
}
