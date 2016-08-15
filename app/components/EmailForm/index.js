/**
*
* EmailForm
*
*/

import React from 'react';
import styles from './styles.scss';

function EmailForm(props) {

  const handleKeyPress = function(e) {
    if (e.key === 'Enter') {
      console.log('submitted email');
      // this.props.submitEmail();
    }
  }

  return (
    <input type='email' className={styles.email} onKeyPress={handleKeyPress}></input>
  );
}

EmailForm.propTypes = {
  submitEmail: React.PropTypes.func,
};

export default EmailForm;
