import React from 'react';

// import styles from './styles.css';

function StateSelect(props) {
  let options;
  if (props.states) {
    options = props.states.map((state, index) => (
      <option key={`state-${index}`} value={state.code}>{state.label}</option>
    ));
  }
  return (
    <div className="form-group">
      <select className="form-control" onChange={props.onChange} defaultValue="">
        <option key={"state-default"} value="" disabled>Select your state</option>
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
