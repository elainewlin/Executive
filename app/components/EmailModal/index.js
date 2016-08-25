/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import EmailForm from 'components/EmailForm';

function EmailModal(props) {
  let modal;
  
  if (props.isOpen) {
    modal = (<div className={styles.email}>
      <div className={styles.close}>
      x
      </div>
      <EmailForm {...props}></EmailForm>
    </div>);
  }

  return (
    <div>
      {modal}
    </div>
  );
}

EmailModal.propTypes = {
  isOpen: React.PropTypes.bool,
  submitEmail: React.PropTypes.func,
};

export default EmailModal;