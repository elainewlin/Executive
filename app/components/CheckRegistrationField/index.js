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

  var text = 'TEXT';
  var select = 'SELECT';
  var check = 'CHECK';

  // var label = props.field.label;
  // var fieldType = props.field.type;
  // var conf = props.field.conf; 
  // var fieldWidth = props.field.width;

  var parseConfOptions = function(conf) {
    var splitConf = conf.split(',');
    var options = [];

    for(var i = 1; i < splitConf.length; i++) {
      var temp = splitConf[i].split(':');
      options.push({label: temp[0], value: temp[1]});
    }

    return options;
  }

  // var formField;
  // if (fieldType == text) {
  //   formField = 
  //   <input type='text' className='form-control' id={label} placeholder={label}/>
  // }
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
    <div className='form-group col-md-4'>
      I'm still a check registration field, but with more code! But the code is hidden... spookyyyyy.
    </div>
  );
}

// CheckRegistrationField.propTypes = {
//   field: React.PropTypes.object.isRequired
// }

export default CheckRegistrationField;
