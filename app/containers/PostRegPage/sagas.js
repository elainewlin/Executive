import { takeLatest } from 'redux-saga';
import { fork, put, select, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';

export function* submitEmail() {
  console.log("sagas!");
  const email = yield select(selectors.selectEmail());
  const state = yield select(selectors.selectState());
  console.log(state);
  // const emailResult = yield call(
  // request,
  // c.FETCH_MAILCHIMP_URL+email['email']+"&merge_vars[state]="+state,
  // {
  //   mode: 'no-cors'
  // });

}

export function* postRegSaga() {
  yield fork(takeLatest, c.SUBMIT_EMAIL, submitEmail);
}

// All sagas to be loaded
export default [
  postRegSaga,
];
