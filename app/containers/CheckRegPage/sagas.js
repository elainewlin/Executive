import { takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from './actions';
import * as c from './constants';

export function* fetchStates() {
  const states = yield call(request, c.FETCH_STATES_URL);
  if (!states.err) {
    yield put(actions.loadStates(states.data));
  }
}

export function* checkRegSaga() {
  yield fork(takeEvery, c.FETCH_STATES, fetchStates);
}

// All sagas to be loaded
export default [
  checkRegSaga,
];
