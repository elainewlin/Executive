/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
});

function postRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.SUBMIT_EMAIL:
      return state.set('params', action.params);
    default:
      return state;
  }
}

export default postRegPageReducer;
