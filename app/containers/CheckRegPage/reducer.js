/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  states: false,
  currentState: false,
  loading: false,
  formData: false,
});

function checkRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.LOAD_STATES:
      return state
        .set('states', action.states);
    case c.CHANGE_STATE:
      return state
        .set('currentState', action.state)
        .set('loading', true);
    case c.LOAD_STATE_FORM:
      return state
        .set('formData', action.stateFormData)
        .set('loading', false);
    default:
      return state;
  }
}

export default checkRegPageReducer;
