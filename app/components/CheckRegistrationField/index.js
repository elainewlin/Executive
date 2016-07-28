/**
*
* LocaleToggle
*
*/

import React from 'react';

import styles from './styles.css';
import ToggleOption from '../ToggleOption';

function CheckRegistrationField(props) {  // eslint-disable-line react/prefer-stateless-function

  var text = 'TEXT';
  var select = 'SELECT';
  var check = 'CHECK';

  var label = props.field.label;
  var fieldType = props.field.type;
  var conf = props.field.conf; 
  var fieldWidth = props.field.width;

  var parseConfOptions = function(conf) {
    var splitConf = conf.split(',');
    var options = [];

    for(var i = 1; i < splitConf.length; i++) {
      var temp = splitConf[i].split(':');
      options.push({label: temp[0], value: temp[1]});
    }

    return options;
  }
  var allStates = [{stateName: 'blah', abbreviation: 'blah'}]

  var formField;
  if (fieldType == text) {
    formField = 
    <input type='text' className='form-control' id={label} placeholder={label}/>
  }
  if (fieldType == select) {
    formField =     
      <select className="selectpicker">
        {
          parseConfOptions(conf).map(function(state) {
            return <option key={state.value}
              value={state.value}>{state.label}</option>;
          })
        }
      </select>
  }
 
  return (
    <div className={`form-group col-xs-${fieldWidth}`}>
      {formField}
    </div>
  );
}

CheckRegistrationField.propTypes = {
  field: React.PropTypes.object.isRequired
}

export default CheckRegistrationField;
