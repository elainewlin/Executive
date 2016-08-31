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
  let helperText = 'Submit Email';
  let result;

  const registerText = 'Get reminders to register';
  const voteText = 'Get reminders to vote';

  if (props.registered === 'registered') {
    result = (<div className={styles.result}><div className={styles.yes}>Registered in {props.state}</div></div>);
    helperText = voteText;
  }
  if (props.registered === 'not registered') {
    result = (<div className={styles.result}><div className={styles.no}> Not registered in {props.state}</div></div>);
    helperText = registerText;
  }
  if (props.registered === 'registering') {
    result = (<div>{registerText}</div>);
  }
  if (props.registered === 'voting') {
    result = (<div>{voteText}</div>);
  }

  return (
    <div className={styles.email}>
      {result}
      <form onSubmit={props.submitEmail} className="form">
        <Field type="text" name="email" className={styles.input} placeholder="example@votemate.us" component="input" required autoFocus />
        <button type="submit" className={styles.submit}>{helperText}</button>
      </form>
      <div className={styles.status}>{props.status}</div>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
  registered: React.PropTypes.string,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
