/**
*
* CheckField
*
*/

import React from 'react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import styles from './styles.css';

function CheckField(props) {
  return (
    <div className={`checkbox col-xs-${props.width}`}>
      <label htmlFor={props.name}>
        <input type="checkbox" name={props.name} />
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
