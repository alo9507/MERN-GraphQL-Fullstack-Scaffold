import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import { Field, reduxForm } from 'redux-form';

class CreateReview extends Component {
  onSubmit(formProps) {
    return;
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <Form.Field type={type} className={className} label={label} {...input}>
        {this.renderError(meta)}
      </Form.Field>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            name='title'
            label='Title'
            placeholder="Joe's Mom's Chicken Nuggets"
            type='input'
            component={this.renderInput}
          />
        </div>
        <div>
          <Field
            label='Tagline'
            name='tagline'
            placeholder='Something witty...'
            type='input'
            component={this.renderInput}
          />
        </div>
        <div>
          <Field
            name='mom'
            label="Mom's Name"
            placeholder="Mom's Name"
            component={this.renderInput}
          />
        </div>
        <div>
          <Field
            name='review'
            label='Review'
            component={this.renderInput}
            placeholder={`How was your culinary experience at 's house?`}
          />
        </div>
        <div className='has-error'>{this.props.errorMessage}</div>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'createReview',
  validate
})(CreateReview);

export default formWrapped;
