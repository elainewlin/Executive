/**
*
* SelectField
*
*/

import React from 'react';
import { Field } from 'redux-form';

function SelectField(props) {
  let options;
  if (props.options) {
    options = props.options.map((option, index) => (
      <option key={`option-${index}`} value={option[1]}>{option[0]}</option>
    ));
  }
  return (
    <div className={`form-group col-xs-${props.width}`}>
      <Field name={props.name} component="select" defaultValue="" id={props.label} required={props.required}>
        <option key="option-default" value="" disabled>{props.label}</option>
        {options}
      </Field>
    </div>
  );
}

SelectField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array,
  width: React.PropTypes.number,
  required: React.PropTypes.bool,
};

export default SelectField;
