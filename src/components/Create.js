import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class CreateReview extends Component {
  onSubmit(formProps) {
    return;
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            name="title"
            component={this.renderInput}
            label="Title"
            placeholder="Joe's Mom's Chicken Nuggets"
          />
        </div>
        <div>
          <Field
            name="tagline"
            component="input"
            placeholder="Something witty..."
          />
        </div>
        <div>
          <Field
            name="yearsActive"
            component="input"
            placeholder="Years Active"
          />
        </div>
        <div>
          <Field name="genre" component="input" placeholder="Genre" />
        </div>
        <div className="has-error">{this.props.errorMessage}</div>
        <button className="btn">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "createReview"
})(CreateReview);

export default formWrapped;
