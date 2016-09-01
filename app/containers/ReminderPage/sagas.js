import { takeLatest } from 'redux-saga';
import { fork, select, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from './actions';
import * as selectors from './selectors';
import * as c from './constants';

export function* submitEmail() {

  const email = yield select(selectors.selectEmail());
  const subscribeResult = yield call(
    request,
    c.SUBSCRIBE_EMAIL_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        email_address: email.email,
        status: 'subscribed',
        merge_fields: { STATE: '', REGISTERED: 'true' },
      }),
    }
  );

  let status = 'Server error. Try again later.';
  if (!subscribeResult.err) {
    if (subscribeResult.data.status === 'subscribed') {
      status = 'Subscribed.';
    } else if (subscribeResult.data.title === 'Member Exists') {
      status = 'You were already subscribed.';
    } else if (subscribeResult.data.title === 'Invalid Resource') {
      status = subscribeResult.data.detail;
    }
  }
  yield put(actions.updateEmailStatus(status));
  
}

export function* aboutPageSaga() {
  yield fork(takeLatest, c.SUBMIT_EMAIL, submitEmail);
}

export default [
  aboutPageSaga,
];
