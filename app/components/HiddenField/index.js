/**
*
* HiddenField
*
*/

import React from 'react';
import { Field } from 'redux-form';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import styles from './styles.css';

function HiddenField(props) {
  return (
    <Field name={props.name} component="input" type="hidden" />
  );
}

HiddenField.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default HiddenField;
