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
        Don't forget to vote! Sign up for reminders.
      </div>
      <form onSubmit={props.submitEmail} className='form-inline'>
        <div className='form-group'>
          <Field type='text' name='email' className={styles.input} placeholder='Email' component="input" />
        </div>
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