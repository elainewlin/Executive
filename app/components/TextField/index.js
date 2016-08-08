/**
*
* TextField
*
*/

import React from 'react';
import { Field } from 'redux-form';

function TextField(props) {
  return (
    <div className={`form-group col-xs-${props.width}`}>
      <Field type="text" name={props.name} placeholder={props.label} component="input" />
    </div>
  );
}

TextField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  width: React.PropTypes.number,
};

export default TextField;
