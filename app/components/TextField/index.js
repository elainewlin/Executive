/**
*
* TextField
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function TextField(props) {
  return (
    <div className={`form-group col-xs-${props.width}`}>
      <input type="text" className="form-control" name={props.name} placeholder={props.label} />
    </div>
  );
}

export default TextField;
