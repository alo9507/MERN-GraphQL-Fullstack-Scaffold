import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';
import addAuthor from '../graphql/mutations/addAuthor';
import fetchAuthors from '../graphql/queries/fetchAuthors';

import { Field, reduxForm } from 'redux-form';

import history from '../routes/history';

class CreateReview extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <Form.Field>
        <label>{label}</label>
        <input {...input} className={className} />
        {this.renderError(meta)}
      </Form.Field>
    );
  };

  onSubmit(formProps) {
    this.props
      .mutate({
        variables: { name: formProps.name },
        refetchQueries: [{ query: fetchAuthors }]
      })
      .then(() => history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
        <Link to='/'>Back</Link>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name='name'
            label='Name'
            placeholder='Joe Smith'
            type='input'
            component={this.renderInput}
          />
          <Form.Button type='submit'>Submit</Form.Button>
        </Form>
      </React.Fragment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.title = 'You must enter a name';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'addAuthor',
  validate
})(CreateReview);

export default graphql(addAuthor)(formWrapped);
