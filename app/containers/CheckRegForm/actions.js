/*
 *
 * CheckRegForm actions
 *
 */

import * as c from './constants';

export function fetchInitialState() {
  return {
    type: c.FETCH_INITIAL_STATE,
  };
}

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

export function submitForm() {
  return {
    type: c.SUBMIT_FORM,
  };
}

export function loadResults(results) {
  return {
    type: c.LOAD_RESULTS,
    results,
  };
}

export function setApiErrMsg(msg) {
  return {
    type: c.SET_API_ERR_MSG,
    msg,
  };
}
