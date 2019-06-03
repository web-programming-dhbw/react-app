import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HomeJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">PitchApp</h1>
          <p className="lead">from ideas to projects</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
