/*
 *
 * CheckRegPage reducer
 *
 */

import { combineReducers } from 'redux-immutable';
import checkRegFormReducer from '../CheckRegForm/reducer';

export default combineReducers({
  form: checkRegFormReducer,
});
