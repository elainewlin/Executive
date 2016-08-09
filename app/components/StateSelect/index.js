import React from 'react';
import styles from './styles.scss';

function StateSelect(props) {
  let options;
  if (props.states) {
    options = props.states.map((state, index) => (
      <option key={`state-${index}`} value={state.code}>{state.label}</option>
    ));
  }

  const API_KEY = 'AIzaSyAMfwLqZ6TriYOFafbR6ty6cKFIjRyIB3w';
  fetch('https://www.googleapis.com/geolocation/v1/geolocate?key='+API_KEY, { method:'POST' })
  .then(function(response) {
    response.json().then(function(data) {
      var lat = data.location.lat;
      var lng = data.location.lng;
      fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+API_KEY, { method:'POST'})
      .then(function(response) {
        response.json().then(function(data) {
          var address = data.results[0].address_components;
          var state = address.filter(function(address, i) {
            return address.types.indexOf('administrative_area_level_1') > -1;
          });
          console.log(state[0].short_name);
        });
      });
    });
  });

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
