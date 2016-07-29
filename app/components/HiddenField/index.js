/**
*
* HiddenField
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function HiddenField(props) {
  return (
    <input type="hidden" name={props.name} value={props.value || ''} />
  );
}

export default HiddenField;
