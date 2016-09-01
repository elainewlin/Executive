/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import states from 'utils/state_names';

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

  let stateOptions = [];
  for (const abbreviation in states) {
    stateOptions.push(<option key={abbreviation} value={abbreviation}>{states[abbreviation]}</option>);
  }

  let stateSelect;
  let isRegisteredSelect;
  let emailField = (<Field type="text" name="email" className={styles.input} placeholder="example@votemate.us" component="input" required autoFocus />);
  let legal;

  if (props.registered === 'reminders') {
    stateSelect = (
      <div className={styles.formField}>
        <div>State</div>
        <Field name="state" component="select" required>
          <option value="">Select your state</option>
          {stateOptions}
        </Field>
      </div>
    );
    isRegisteredSelect = (
      <div className={styles.formField}>
        <div>Registration Status</div>
        <Field name="regStatus" component="select" required>
          <option value="">What reminders do you need?</option>
          <option value="false" key="false">Registration and election reminders</option>
          <option value="true" key="true">Only election reminders</option>
        </Field>
      </div>
    );
    emailField = (
      <div className={styles.formField}>
        <div>Email</div>
        <Field type="text" name="email" placeholder="example@votemate.us" component="input" required />
      </div>
    );
    legal = (<div className={styles.formField}>
      By submitting my email, I agree to votemate's <a href="/terms" className={styles.link}>Terms of Service</a> and <a href="/privacy" className={styles.link}>Privacy Policy</a>.
    </div>);
  }

  return (
    <div>
      {result}
      <form onSubmit={props.submitEmail} className="form">
        {isRegisteredSelect}
        {stateSelect}
        {emailField}
        {legal}
        <button type="submit" className={styles.submit}>{helperText}</button>
      </form>
      <div className={styles.status}>{props.status}</div>
    </div>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
  registered: React.PropTypes.string,
  state: React.PropTypes.string,
  status: React.PropTypes.string,
};

export default reduxForm({
  form: 'EmailForm',
  destroyOnUnmount: false,
})(EmailForm);
