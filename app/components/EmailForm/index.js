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
  let helperText = 'Get reminders to register';
  let result;


  if (props.registered === 'registered') {
    result = (<div className={styles.yes}>Registered in {props.state}</div>);
    helperText = 'Get reminders to vote';
  }
  if (props.registered === 'not registered') {
    result = (<div className={styles.no}> Not registered in {props.state}</div>);
  }
  if (props. registered === 'registering') {
    result = (<div>{helperText}</div>);
    helperText = 'Submit';
  }

  return (
    <div className={styles.email}>
      <div className={styles.result}>
        {result}
      </div>
      <form onSubmit={props.submitEmail} className="form">
        <Field type="text" name="email" className={styles.input} placeholder="example@votemate.us" component="input" required autoFocus={true} />
        <button type="submit" className={styles.submit}>{helperText}</button>
      </form>
      <div>{props.status}</div>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
  status: React.PropTypes.string,
  registered: React.PropTypes.string,
  state: React.PropTypes.string,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
