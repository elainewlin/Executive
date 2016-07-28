/**
*
* LocaleToggle
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
import styles from './styles.css';
import ToggleOption from '../ToggleOption';

function CheckRegistrationField(props) {  // eslint-disable-line react/prefer-stateless-function
  const text = 'TEXT';
  const select = 'SELECT';
  const check = 'CHECK';

  const fieldLabel = props.field.label;
  const fieldType = props.field.type;
  const fieldConf = props.field.conf;
  const fieldWidth = props.field.width;

  function parseConfOptions(conf) {
    const splitConf = conf.split(',');
    const options = [];

    for (let i = 1; i < splitConf.length; i++) {
      const temp = splitConf[i].split(':');
      options.push({ label: temp[0], value: temp[1] });
    }

    return options;
  }

  let formField;
  if (fieldType === text) {
    formField = <input type="text" className="form-control" id={fieldLabel} placeholder={fieldLabel} />;
  }
  // if (fieldType == select) {
  //   formField =
  //   <Select
  //     value='one'
  //     options={parseConfOptions(conf)}
  //     placeholder={label}
  //     onChange={e => console.log(e.value)}
  //     clearable={false}
  //   />
  // }

  return (
    <div className={`form-group col-md-${fieldWidth}`}>
      {formField}
    </div>
  );
}

CheckRegistrationField.propTypes = {
  field: React.PropTypes.object.isRequired,
};

export default CheckRegistrationField;
