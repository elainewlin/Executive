import React from 'react';

import styles from './styles.css';

function StateSelect(props) {
  let options;
  if (props.items) {
    options = props.items.map((state, index) => (
      <option key={`state-${index}`} value={state.code}>{state.label}</option>
    ));
  }
  return (
    <div className="form-group">
      <label htmlFor="state">Select your state</label>
      <select className="form-control">
        {options}
      </select>
    </div>
  );
}

export default StateSelect;
