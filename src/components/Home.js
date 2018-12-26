import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { connect } from 'react-redux';
import { increment } from '../redux/actions';

import fetchAuthors from '../graphql/queries/fetchAuthors';

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
    const { data } = this.props;

    if (data.loading) {
      return <div>Fetching songs...</div>;
    }

    if (data.error) {
      return <h1>Error retrieving data! &mdash; {data.error}</h1>;
    }

    return (
      <div className='ui grid'>
        <div>
          <p>Redux</p>
          <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, content: this.props.count }}
            labelPosition='right'
            onClick={this.props.increment}
          />
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

export default graphql(fetchAuthors)(reduxified);
