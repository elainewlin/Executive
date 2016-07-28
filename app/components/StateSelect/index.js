import React from 'react';

import styles from './styles.css';

function StateSelect(props) {
  var allStates = require('./states.json');
  
  return (
    <div>
      <select className='selectpicker'>
        {
          allStates.map(function(state) {
            return <option key={state.abbreviation}
              value={state.abbreviation}>{state.stateName}</option>;
          })
        }
      </select>
    </div>
  );
}

export default StateSelect;
