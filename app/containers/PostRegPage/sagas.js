import { takeLatest } from 'redux-saga';
import { fork, select, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as c from './constants';

export function* submitEmail() {
  const email = yield select(selectors.selectEmail());
  const state = yield select(selectors.selectState());
  const registered = yield select(selectors.selectRegistered());

  const submitURL = `${c.FETCH_MAILCHIMP_URL}${email.email}&merge_vars[state]=${state}&merge_vars[registered]=${registered}`;
  yield call(
    request,
    submitURL,
    {
      mode: 'no-cors',
    });
}

export function* postRegSaga() {
  yield fork(takeLatest, c.SUBMIT_EMAIL, submitEmail);
}

export default [
  postRegSaga,
];
