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
          <CardTitle style={{marginBottom: "0px", fontSize: "22px", fontWeight: "bold"}}>{title}</CardTitle>
          <CardSubtitle style={{marginBottom: "15px"}} className="text-muted">{category}</CardSubtitle>
          <CardText style={{marginBottom: "5px", overflow: "auto", height: "150px", textAlign: "justify" }}>
            {desc}
          </CardText>
          <Row>
            <Col><ShowMore/></Col>
            <Col><Button color ='success' size= "sm">Offer Sponsorship</Button></Col>
          </Row>
        </CardBody>
      <CardFooter style={{fontWeight: "bold"}}>
        {owner}
        <br/>
        idea_owner@company_email.com
      </CardFooter>
      </Card>
  );
}
