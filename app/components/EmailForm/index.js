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
    <div className={styles.email}>
      <div className={styles.heading}>
        Don't forget to vote! <span className={styles.wrap}>Sign up for reminders.</span>
      </div>
      <form onSubmit={props.submitEmail} className="form-inline">
        <Field type="text" name="email" className={styles.input} placeholder="Email" component="input" />
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
