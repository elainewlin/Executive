import React from 'react';
import styles from './styles.scss';

function StateSelect(props) {
  let options;
  let selectedState;

  if (props.states) {
    options = props.states.map((state, index) => (
      <option key={`state-${index}`} value={state.code}>{state.label}</option>
    ));
  }

  if (props.initialState) {
    console.log(props.initialState);
    selectedState = props.initialState;
  }

  return (
    <div className="form-group">
      <select className={styles.stateSelect} onChange={props.onChange} defaultValue={selectedState}>
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
  initialState: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
};

export default StateSelect;
