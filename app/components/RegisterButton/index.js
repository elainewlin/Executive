/**
*
* RegisterButton
*
*/

import React from 'react';
import styles from './styles.scss';

function RegisterButton(props) {

  return (
    <button className={styles.register}>
        Register in {props.state}
    </button>
  );
}

RegisterButton.propTypes = {
  state: React.PropTypes.string,
};

export default RegisterButton;
