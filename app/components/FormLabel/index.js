/**
*
* FormLabel
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import styles from './styles.scss';

function FormLabel(props) {
  return (
    <div className="col-xs-12">
      <label>{props.label}</label>
    </div>
  );
}

FormLabel.propTypes = {
  label: React.PropTypes.string,
};

export default FormLabel;
