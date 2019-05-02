import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Resources from './Resources.js';
import { Link } from 'react-router-dom';


export default function Pitch({
  pitch:{id, title, owner, category, desc}
}){
  return (
    <Col>
    <div>
      
      <Card style={{ color:'midnightBlue', background:'ghostWhite' }} body outline color="primary">
        <CardBody>
          <CardTitle style={{ color:'purple', fontWeight:'bold'}} > {title}</CardTitle>
          <CardSubtitle style={{ color:'tomato', fontWeight:'bold'}} >{category}</CardSubtitle>
          <Resources/>
          <CardText style={{ color:'orange', fontWeight:'bold'}}>
            {owner}
          </CardText>
          <Link to={`/pitch/${id}`} className="btn btn-secondary">
            View Details
          </Link>
        </CardBody>
      </Card>
      
    </div>
    </Col>
  );
}
