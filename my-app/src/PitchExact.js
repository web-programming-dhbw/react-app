import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

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

export class Launch extends Component {
  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);
    return (
      <Fragment>
        <Query query={PITCH_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

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
                    <Link to="/home" className="btn btn-secondary">
                  Back
                </Link>
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

export default Launch;