import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import history from './History';

const PITCH_QUERY = gql`
  query PitchQuery($id: Int!) {
    pitch(where: {id: {_eq: $id}}) {
      category
      desc
      owner
      title
    }
  }
`;

export class PitchExact extends Component {
  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);
    return (
      <Fragment>
        <Query query={PITCH_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            //console.log(history.go(-1))
            const {
              category,
              desc,
              owner,
              title
            } = data.pitch[0];

            return (
              <div>
                <Card style={{ color:'midnightBlue', background:'ghostWhite' }} body outline color="primary">
                <CardBody>
                    <CardTitle style={{ color:'purple', fontWeight:'bold'}} > {title}</CardTitle>
                    <CardSubtitle style={{ color:'tomato', fontWeight:'bold'}} >{category}</CardSubtitle>
                    <CardText>{desc}</CardText>
                    <CardText style={{ color:'orange', fontWeight:'bold'}}>
                        {owner}
                    </CardText>
                <Button onClick={e => {history.go(-1)}} className="btn">Back</Button>
                </CardBody>
            </Card>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default PitchExact;