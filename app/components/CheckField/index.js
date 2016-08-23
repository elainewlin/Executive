/**
*
* CheckField
*
*/

import React from 'react';
import { Field } from 'redux-form';

function CheckField(props) {
  return (
    <div className={`checkbox col-xs-${props.width}`}>
      <label htmlFor={props.name}>
        <Field name={props.name} component="input" type="checkbox" id={props.label} required={props.required} />
        {props.description}
      </label>
    </div>
  );
}

CheckField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  description: React.PropTypes.string,
  width: React.PropTypes.number,
  required: React.PropTypes.bool,
};

export default CheckField;
