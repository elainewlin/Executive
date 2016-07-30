/**
*
* SelectField
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import styles from './styles.css';

function SelectField(props) {
  let options;
  if (props.options) {
    options = props.options.map((option, index) => (
      <option key={`option-${index}`} value={option[1]}>{option[0]}</option>
    ));
  }
  return (
    <div className={`form-group col-xs-${props.width}`}>
      <select className="form-control" name={props.name}>
        <option key="option-default" value="">{props.label}</option>
        {options}
      </select>
    </div>
  );
}

SelectField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array,
  width: React.PropTypes.number,
};

export default SelectField;
