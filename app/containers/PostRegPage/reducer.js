/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  isSubmitted: false,
  isOpen: true,
});

function postRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.SUBMIT_EMAIL:
      return state
        .set('params', action.params)
        .set('isSubmitted', true);
    case c.UPDATE_EMAIL_STATUS:
      return state
        .set('emailStatus', action.status);
    case c.CLOSE_MODAL:
      return state
        .set('isOpen', false);
    default:
      return state;
  }
}

export default postRegPageReducer;
