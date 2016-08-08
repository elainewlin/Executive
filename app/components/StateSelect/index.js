import React from 'react';
import styles from './styles.scss';

function StateSelect(props) {
  let options;
  if (props.states) {
    options = props.states.map((state, index) => (
      <option key={`state-${index}`} value={state.code}>{state.label}</option>
    ));
  }
  return (
    <div className="form-group">
      <select className={styles.stateSelect} onChange={props.onChange} defaultValue="">
        <option key={"state-default"} value="" className={styles.default} disabled>Select your state</option>
        {options}
      </select>
    </div>
  );
}

StateSelect.propTypes = {
  states: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onChange: React.PropTypes.func,
};

export default StateSelect;
