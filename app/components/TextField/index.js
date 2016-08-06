/**
*
* TextField
*
*/

import React from 'react';
import { Field } from 'redux-form';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import styles from './styles.css';

function TextField(props) {
  return (
    <div className={`form-group col-xs-${props.width}`}>
      <Field type="text" className="form-control" name={props.name} placeholder={props.label} component="input" />
    </div>
  );
}

TextField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  width: React.PropTypes.number,
};

export default TextField;
