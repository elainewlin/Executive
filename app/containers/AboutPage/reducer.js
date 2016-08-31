/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
});

function aboutPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.UPDATE_EMAIL_STATUS:
      return state
        .set('emailStatus', action.status);
    default:
      return state;
  }
}

export default aboutPageReducer;
