import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { connect } from 'react-redux';
import { increment } from '../redux/actions';

class Home extends Component {
  renderAuthors = () => {
    return this.props.data.authors.map(author => {
      return (
        <li className='item' key={author.id}>
          <div className='content'>{author.name}</div>
        </li>
      );
    });
  };

  render() {
    if (this.props.data.loading) {
      return <div>Fetching songs...</div>;
    }

    return (
      <div className='ui grid'>
        <div>
          <p>Redux</p>
          <div>{this.props.count}</div>
        </div>

        <div>
          <p>ApolloClient</p>
          <div>{this.renderAuthors()}</div>
        </div>

        <div>
          <p>Google OAuth2</p>
          <div>
            {this.props.isSignedIn ? this.props.userId : `Not signed in`}
          </div>
        </div>

        <div>
          <button onClick={this.props.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.count,
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

const reduxified = connect(
  mapStateToProps,
  { increment }
)(Home);

const query = gql`
  {
    authors {
      name
    }
  }
`;

export default graphql(query)(reduxified);
