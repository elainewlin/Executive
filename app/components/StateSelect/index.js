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
      <select className="form-control" onChange={props.onChange}>
        <option key={"state-default"} value="">Select your state</option>
        {options}
      </select>
    </div>
  );
}

export default StateSelect;
