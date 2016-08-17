import { takeLatest } from 'redux-saga';
import { fork, put, select, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';

export function* submitEmail() {
  const email = yield select(selectors.selectEmail());
  const state = yield select(selectors.selectState());
  const registered = yield select(selectors.selectRegistered());

  const emailResult = yield call(
  request,
  c.FETCH_MAILCHIMP_URL+email['email']+"&merge_vars[state]="+state+"&merge_vars[registered]="+registered,
  {
    mode: 'no-cors'
  });
}

export function* postRegSaga() {
  yield fork(takeLatest, c.SUBMIT_EMAIL, submitEmail);
}

export default [
  postRegSaga,
];
