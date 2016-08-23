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
  let form;
  if (props.isSubmitted) {
    form = (<div>Currently not working. Please try again later.</div>);
  }
  else {
    form = (<form onSubmit={props.submitEmail} className="form-inline">
      <Field type="text" name="email" className={styles.input} placeholder="Email" component="input" required/>
      <button type="submit" className={styles.submit}>Submit</button>
    </form>);
  }

  return (
    <div className={styles.email}>
      <div className={styles.heading}>
        Don't forget to vote! <span className={styles.wrap}>Sign up for reminders.</span>
      </div>
      {form}
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
  isSubmitted: React.PropTypes.bool,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
