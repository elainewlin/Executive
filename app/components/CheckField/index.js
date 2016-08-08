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
        <Field name={props.name} component="input" type="checkbox" />
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
};

export default CheckField;
