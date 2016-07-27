import React from 'react';

import styles from './styles.css';

function StateSelect(props) {
  var options = require('./states.json');
  console.log(options);
  // return (
  //   <div className={classes.select}>
  //     <Select
  //     value={props.selectedState}
  //     options={options}
  //     placeholder='Select a state'
  //     onChange={e => props.changeState(e.value)}
  //     clearable={false}
  //     />
  //   </div>
  // );
  return (
    <div>
        State Select here!
        <h1{...props} />
    </div>
  );
}

export default StateSelect;
