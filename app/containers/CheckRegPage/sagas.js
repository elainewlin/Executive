import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from './actions';
import * as c from './constants';

export function* fetchStates() {
  const states = yield call(request, c.FETCH_STATES_URL);
  if (!states.err) {
    yield put(actions.loadStates(states.data));
  }
}

export function* changeState(action) {
  const url = `${c.FETCH_STATES_URL}${action.state}/`;
  const stateFormResponse = yield call(request, url);
  if (!stateFormResponse.err) {
    yield put(actions.loadStateForm(stateFormResponse.data));
  }
}

export function* checkRegSaga() {
  yield fork(takeEvery, c.FETCH_STATES, fetchStates);
  yield fork(takeEvery, c.CHANGE_STATE, changeState);
}

// All sagas to be loaded
export default [
  checkRegSaga,
];
