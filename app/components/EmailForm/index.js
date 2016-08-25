/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import EmailModal from 'components/EmailModal';

function EmailForm(props) {

  return (
    <div className={styles.email}>
      <div className={styles.heading}>
        Get reminders to vote.
      </div>
      <form onSubmit={props.submitEmail} className="form">
        <Field type="text" name="email" className={styles.input} placeholder="example@votemate.com" component="input" required />
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
      <div>{props.status}</div>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
  status: React.PropTypes.string,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
