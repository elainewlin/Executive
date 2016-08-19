/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  states: false,
  currentState: '',
  loading: false,
  formData: false,
  results: false,
  apiErrMsg: '',
});

function checkRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.LOAD_STATES:
      return state
        .set('states', action.states);
    case c.CHANGE_STATE:
      return state
        .set('currentState', action.state)
        .set('results', false)
        .set('loading', true)
        .set('apiErrMsg', '');
    case c.LOAD_STATE_FORM:
      return state
        .set('formData', action.stateFormData)
        .set('loading', false);
    case c.SUBMIT_FORM:
      return state
        .set('apiErrMsg', '');
    case c.REGISTER_NOW:
      return state
        .set('apiErrMsg', '');
    case c.LOAD_RESULTS:
      return state
        .set('results', action.results)
        .set('apiErrMsg', '');
    case c.SET_API_ERR_MSG:
      return state.set('apiErrMsg', action.msg);
    default:
      return state;
  }
}

export default checkRegPageReducer;
