import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Resources from './Resources.js';
import { Link } from 'react-router-dom';


export default function Pitch({
  pitch:{id, title, owner, category, desc}
}){
  return (
    <Col xs="6" xm = "4" className="py-2">
    <div>
      <Card style={{ color:'midnightBlue', background:'ghostWhite', marginBottom: "40px" }} body outline color="primary">
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
