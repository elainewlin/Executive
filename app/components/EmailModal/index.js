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

  return (
    <div>
      <EmailForm {...props}></EmailForm>
    </div>
  );
}

EmailModal.propTypes = {
  isOpen: React.PropTypes.bool,
  submitEmail: React.PropTypes.func,
  isSubmitted: React.PropTypes.bool,
};

export default EmailModal;