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
      <Field type="text" name={props.name} placeholder={props.label} id={props.label} component="input" required={props.required} />
    </div>
  );
}

TextField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  width: React.PropTypes.number,
  required: React.PropTypes.bool,
};

export default TextField;
