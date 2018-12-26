import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import deleteAuthor from '../graphql/mutations/deleteAuthor';
import fetchAuthors from '../graphql/queries/fetchAuthors';

import { graphql } from 'react-apollo';

class List extends Component {
  deleteAuthor = id => {
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query: fetchAuthors }]
    });
  };

  renderAuthors = () => {
    return this.props.authors.map(({ name, id }) => {
      return (
        <li className='item' key={id}>
          <div className='content'>{name}</div>
          <Button onClick={this.deleteAuthor(id)}>Delete</Button>
        </li>
      );
    });
  };

  render() {
    return <div>{this.renderAuthors()}</div>;
  }
}

export default graphql(deleteAuthor)(List);
