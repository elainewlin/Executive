/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';
import EmailForm from 'components/EmailForm';
import close from './x.png';

function EmailModal(props) {
  let modal;

  if (props.isOpen) {
    modal = (<div className={styles.email}>
      <img src={close} alt="x" className={styles.close} onClick={props.closeModal} />
      <div className={styles.form}>
        <EmailForm {...props} />
      </div>
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
