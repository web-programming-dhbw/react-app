import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Row, Col, Badge } from 'reactstrap';
import ShowMore from './ShowMore.js';

export default function Pitch(props) {
  return (
    <Card style={{ marginBottom: "40px", height: "400px", overflow: "auto" }}>
      <CardBody style={{ paddingBottom: "15px" }}>
        {props.pitch.is_matched ? <Badge color="danger">Matched</Badge> : <Badge>Unmatched</Badge>}
        <CardTitle style={{ marginBottom: "0px", fontSize: "22px", fontWeight: "bold" }}>{props.pitch.title}</CardTitle>
        <CardSubtitle style={{ marginBottom: "15px" }} className="text-muted">{props.pitch.category}</CardSubtitle>
        <CardText style={{ marginBottom: "5px", overflow: "hidden", height: "130px", textAlign: "justify" }}>
          {props.pitch.desc.substring(0, 195) + "..."}
        </CardText>
        <Row>
          <Col><ShowMore pitch={props.pitch} isManager={props.isManager} /></Col>
          {props.isManager && !props.pitch.is_matched ? <Col><Button color='success' size="sm">Offer Sponsorship</Button></Col> : <span />}
          {props.userEmail === props.pitch.owner_email ? <Col><Button color='danger' size="sm">Delete Pitch</Button></Col> : <span />}
        </Row>
      </CardBody>
      <CardFooter style={{ fontWeight: "bold" }}>
        {props.pitch.owner}
        <br />
        {props.pitch.owner_email}
      </CardFooter>
    </Card>
  );
}
