/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';

function EmailForm(props) {
  return (
    <form onSubmit={props.submitEmail}>
      <Field type='text' name='email' className={styles.email} placeholder='Email Reminder' component="input" />
    </form>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);