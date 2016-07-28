/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  states: ['--'],
});

function checkRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.LOAD_STATES:
      return state
        .set('states', action.states);
    default:
      return state;
  }
}

export default checkRegPageReducer;
