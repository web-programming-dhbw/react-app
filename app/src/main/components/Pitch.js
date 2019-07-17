import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Row, Col, Badge } from 'reactstrap';
import ShowMore from './ShowMore.js';

export default function Pitch({
  pitch:
  {
    id,
    title,
    owner,
    category,
    desc,
    is_matched,
    sponsor_name,
    sponsor_email,
    creation_timestamp,
    matched_timestamp,
    resources,
    owner_email
  }
}) {
  return (
    <Card style={{ marginBottom: "40px", height: "400px", overflow: "auto" }}>
      <CardBody style={{ paddingBottom: "15px" }}>
        {is_matched ? <Badge color="danger">Matched</Badge> : <span/>}
        <CardTitle style={{ marginBottom: "0px", fontSize: "22px", fontWeight: "bold" }}>{title}</CardTitle>
        <CardSubtitle style={{ marginBottom: "15px" }} className="text-muted">{category}</CardSubtitle>
        <CardText style={{ marginBottom: "5px", overflow: "auto", height: "150px", textAlign: "justify" }}>
          {desc.substring(0, 200) + "..."}
        </CardText>
        <Row>
          <Col><ShowMore pitch={{
    id,
    title,
    owner,
    category,
    desc,
    is_matched,
    sponsor_name,
    sponsor_email,
    creation_timestamp,
    matched_timestamp,
    resources,
    owner_email
  }} /></Col>
          <Col>{true ? <Button color='success' size="sm">Offer Sponsorship</Button> : <span/>}</Col>
        </Row>
      </CardBody>
      <CardFooter style={{ fontWeight: "bold" }}>
        {owner}
        <br />
        {owner_email}
      </CardFooter>
    </Card>
  );
}
