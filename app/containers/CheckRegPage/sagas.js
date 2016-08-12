import { takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import request from 'superagent';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';

import { browserHistory } from 'react-router';

export function* fetchStates() {
  const states = yield request.get(c.FETCH_STATES_URL).accept('json');
  if (states.status === 200) {
    yield put(actions.loadStates(states.body));
  }
}

export function* changeState(action) {
  const url = `${c.FETCH_STATES_URL}${action.state}/`;
  const stateFormResponse = yield request.get(url).accept('json');
  if (stateFormResponse.status === 200) {
    yield put(actions.loadStateForm(stateFormResponse.body));
  }
}

export function* submitForm() {
  const state = yield select(selectors.selectCurrentState());
  const url = `${c.FETCH_STATES_URL}${state}/`;
  const formValues = yield select(selectors.selectFormValues());
  const submitFormResponse = yield request.post(url)
                                          .type('form')
                                          .send(formValues)
                                          .accept('json');
  if (submitFormResponse.status === 200) {
    yield put(actions.loadResults(submitFormResponse.body));

    // store results from query
    let results = actions.loadResults(submitFormResponse.body).results;

    // if the form worked, redirect to page with registration status
    if (results["registered"] !== undefined) {
      browserHistory.push(`/postcheck/${results["registered"]}`);
    }
  }
}

export function* checkRegSaga() {
  yield fork(takeEvery, c.FETCH_STATES, fetchStates);
  yield fork(takeEvery, c.CHANGE_STATE, changeState);
  yield fork(takeEvery, c.SUBMIT_FORM, submitForm);
}

// All sagas to be loaded
export default [
  checkRegSaga,
];
