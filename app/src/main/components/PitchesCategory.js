import React, { Fragment } from 'react';
import Pitch from './Pitch.js';
import '../styles/App.css';
import { Container, Row } from 'reactstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import history from './History';

  const PITCHES_CAT_QUERY = gql`
    query PitchesCatQuery($category: String!) {
        pitch(where: {category: {_eq: $category}}) {
        desc
        owner
        title
        category
        id
        }
    }
`;


export default class PitchesCategory extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    let { category } = this.props.match.params;
    history.push(`/pitches/${category}`);
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  

render() {
    let { category } = this.props.match.params;
    return (
      <div>
        
<Container className="gap">
<Fragment>
<Row>
        <Query query={PITCHES_CAT_QUERY} pollInterval={500} variables={{category}}>
          {({ loading, error, data }) => {
            if(data) console.log(data);
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
            <Fragment>
              
                {data.pitch.map(pitch => (
                  
                  <Pitch key={pitch.id} pitch={pitch} />
                  
                ))}
              
            </Fragment> 
            );
          }}
        </Query>
        </Row>
  </Fragment>
</Container>

      </div>
    );
  }
}
