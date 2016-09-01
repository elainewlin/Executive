import { takeLatest } from 'redux-saga';
import { fork, select, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as c from './constants';

export function* submitEmail() {
  const email = yield select(selectors.selectEmail());
  const state = yield select(selectors.selectState());
  const registered = yield select(selectors.selectRegistered());
  yield call(
    request,
    c.SUBSCRIBE_EMAIL_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        email_address: email.email,
        status: 'subscribed',
        merge_fields: { STATE: state, REGISTERED: registered },
      }),
    }
  );
}

export function* postRegSaga() {
  yield fork(takeLatest, c.SUBMIT_EMAIL, submitEmail);
}

export default [
  postRegSaga,
];
