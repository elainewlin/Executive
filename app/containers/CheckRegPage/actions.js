/*
 *
 * CheckRegPage actions
 *
 */

import * as c from './constants';

export function fetchStates() {
  return {
    type: c.FETCH_STATES,
  };
}

export function loadStates(states) {
  return {
    type: c.LOAD_STATES,
    states,
  };
}

export function changeState(state) {
  return {
    type: c.CHANGE_STATE,
    state,
  };
}

export function loadStateForm(stateFormData) {
  return {
    type: c.LOAD_STATE_FORM,
    stateFormData,
  };
}
