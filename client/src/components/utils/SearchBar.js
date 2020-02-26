import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/SearchBar.css';

const validate = values => {
  const errors = {};
  if (!values.game) {
    errors.game = 'Required';
  }
  return errors;
};

const renderField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder="Search Games" type={type} />
      {touched && error && (
        <span style={{ marginTop: '8px' }} className="error-message">
          {error}
        </span>
      )}
    </div>
  </div>
);

const SyncValidationForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <Field name="game" type="text" component={renderField} label="Game" />
      <button className="btn black" type="submit" disabled={submitting}>
        <i className="fas fa-gamepad"></i>
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  destroyOnUnmount: false,
  validate // <--- validation function given to redux-form
})(SyncValidationForm);
