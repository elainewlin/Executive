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
