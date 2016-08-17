/**
*
* RegisterButton
*
*/

import React from 'react';
import styles from './styles.scss';

function RegisterButton(props) {

  return (
    <button className={styles.register} onClick={props.onClick}>
        Register in {props.state}
    </button>
  );
}

RegisterButton.propTypes = {
  state: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default RegisterButton;
