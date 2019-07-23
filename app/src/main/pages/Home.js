import React, { Component } from 'react'
import HomeJumbotron from '../components/HomeJumbotron';
import GDPRModal from '../components/GDPRModal';
import IdeaOwnersModal from '../components/IdeaOwnersModal';
import IdeaSponsorsModal from '../components/IdeaSponsorsModal';
import { Container, Row, Col, Alert } from 'reactstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <HomeJumbotron />
                <Container>
                    <Row>
                        <Alert color="primary">
                            <h3>What is PitchApp?</h3>
                            <p style={{ textAlign: "justify" }}>PitchApp is a platform we developed to help employees find the required organizational support to turn their ideas to reality. The goal of PitchApp is to facilitate the launching of new projects. By making project ideas of colleagues easier and faster visible to management, PitchApp encourages employees to contribute more actively to the success of their company. In this way, PitchApp helps to achieve higher degrees of intrapreneurship, which leads to business growth. Using our application will bring companies ahead of the game, in terms of innovation and
                                employee engagement, as well as make big firms more competitive and flexible, thus more
                                profitable. Hence, “fast innovators take leadership positions in their industries”.</p>
                        </Alert>
                    </Row>
                    <Row><br /></Row>
                    <Row>
                        <Col><IdeaOwnersModal />
                        </Col>
                        <Col><GDPRModal />
                        </Col>
                        <Col><IdeaSponsorsModal />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
