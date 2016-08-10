/**
*
* FormLabel
*
*/

import React from 'react';
import { Link } from 'react-router';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.scss';

function FormLabel(props) {
  const fieldsetToLabel = {
    'name': 'Name',
    'dob': 'Birthday',
    'residence': 'Address',
    'id': 'Identification'
  }

  return (
    <div className='col-xs-12'>
      <label>{fieldsetToLabel[props.label]}</label>
    </div>
  );
}

FormLabel.propTypes = {
  label: React.PropTypes.string
};

export default FormLabel;
