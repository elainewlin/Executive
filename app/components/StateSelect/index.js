import React from 'react';

import styles from './styles.css';

const allStates = require('./states.json');

function StateSelect(props) {
  return (
    <div>
      State Select here!
      <h1{...props} />
      <select className="selectpicker">
        {
          allStates.map((state) => {
            return (<option key={state.abbreviation} value={state.abbreviation}>
              {state.stateName}
            </option>);
          })
        }
      </select>
    </div>
  );
}

export default StateSelect;
