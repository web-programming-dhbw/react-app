import React, { Component } from 'react'
import HomeJumbotron from '../components/HomeJumbotron';
import GDPRModal from '../components/GDPRModal';
import IdeaOwnersModal from '../components/IdeaOwnersModal';
import IdeaSponsorsModal from '../components/IdeaSponsorsModal';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export class Home extends Component {
    render() {
        return (
            <div>
                <HomeJumbotron/>
                <Container>
                    <Row>
                        <ListGroup>
                            <ListGroupItem>General info about PitchApp:
                    A világháborúban a szövetségesek és a tengelyhatalmak álltak egymással szemben. Kezdetben javarészt a tengelyhatalmak győzedelmeskedtek a csatákban, majd 1942-ben mind a kelet-európai, mind a csendes-óceáni, mind az afrikai fronton a szövetségesek törtek előre, és végül a tengelyhatalmak teljes vereséget szenvedtek.

                    Az európai, ázsiai és afrikai földrészen vívott harcokban közel hetven nemzet vett részt, ennek következtében több mint 73 millióan vesztették életüket, beleértve a megölt civileket és az elesett katonákat is. A háború kitöréséhez nagyban hozzájárult az első világháború után, a Párizs környéki békeszerződésekkel (versailles-i békeszerződés; trianoni békeszerződés; saint-germaini békeszerződés; sèvres-i békeszerződés) kialakított világpolitikai helyzet.
                    </ListGroupItem>
                        </ListGroup>
                    </Row>
                    <Row><br/></Row>
                    <Row>
                        <Col><IdeaOwnersModal/>
                        </Col>
                        <Col><GDPRModal/>
                        </Col>
                        <Col><IdeaSponsorsModal/>
                        </Col>
                    </Row>                        
                </Container>
            </div>
        )
    }
}

export default Home
