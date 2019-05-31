import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Resources from './Resources.js';


const Pitch = (props) => {
  return (
    <div>
      <Card style={{ color:'midnightBlue', background:'ghostWhite' }} body outline color="primary">
        <CardBody>
          <CardTitle style={{ color:'purple', fontWeight:'bold'}} > Idea Title</CardTitle>
          <CardSubtitle style={{ color:'tomato', fontWeight:'bold'}} >Category</CardSubtitle>
          <CardText>My idea is... Yield management is a variable pricing strategy, based on understanding, anticipating and influencing consumer
            behavior in order to maximize revenue or profits from a fixed, time-limited resource (such as airline seats or hotel room reservations
            or advertising inventory). As a specific, inventory-focused branch of revenue management, yield management involves strategic control
            of inventory to sell the right product to the right customer at the right time for the right price.
          </CardText>
          <Resources/>
          <CardText style={{ color:'orange', fontWeight:'bold'}}>
            idea_owner@company_email.com
          </CardText>
          <Button color ='success'>Offer Sponsorship</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Pitch;
