/*
 *
 * CheckRegPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  isOpen: true,
});

function postRegPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.SUBMIT_EMAIL:
      return state
        .set('params', action.params)
        .set('isOpen', false);
    case c.CLOSE_MODAL:
      return state
        .set('isOpen', false);
    case c.SHOW_MODAL:
      return state
        .set('isOpen', true);
    default:
      return state;
  }
}

export default postRegPageReducer;
