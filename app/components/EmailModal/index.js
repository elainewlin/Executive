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
import close from './x.png';

function EmailModal(props) {
  let modal;
  
  if (props.isOpen) {
    modal = (<div className={styles.email}>
      <img src={close} className={styles.close} onClick={props.closeModal} />
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
  status: React.PropTypes.string,
  closeModal: React.PropTypes.func,
  registered: React.PropTypes.string,
  state: React.PropTypes.string,
};

export default EmailModal;