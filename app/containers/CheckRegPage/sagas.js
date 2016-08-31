import { takeLatest } from 'redux-saga';
import { fork, put, select, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';
import * as selectors from './selectors';
import messages from './messages';
import * as actions from './actions';
import * as c from './constants';

export function* fetchInitialState() {
  const location = yield call(
    request,
    c.FETCH_LOCATION_URL,
    { method: 'POST' });
  if (!location.err) {
    const lat = location.data.location.lat;
    const lng = location.data.location.lng;
    const address = yield call(
      request,
      c.FETCH_ADDRESS_URL(lat, lng),
      { method: 'POST' });
    if (!address.err) {
      const addressComponents = address.data.results[0].address_components;
      const state = addressComponents.filter((ac) =>
        ac.types.indexOf('administrative_area_level_1') > -1
      );
      const stateCode = state[0].short_name;
      yield put(actions.changeState(stateCode));
    }
  }
}

export function* fetchStates() {
  const states = yield call(request, c.FETCH_STATES_URL);
  if (!states.err) {
    yield put(actions.loadStates(states.data));
  } else {
    yield put(actions.setApiErrMsg(messages.apiErr));
  }
}

export function* changeState(action) {
  const stateForm = yield call(request, c.FETCH_STATE_URL(action.state));

  // no voter registration, goes straight to next page
  if (action.state === 'ND') {
    browserHistory.push(`/check/${action.state}/true`);
  }

  if (!stateForm.err) {
    yield put(actions.loadStateForm(stateForm.data));
  } else {
    yield put(actions.setApiErrMsg(messages.apiErr));
  }
}

export function* submitForm() {
  const state = yield select(selectors.selectCurrentState());
  const formValues = yield select(selectors.selectFormValues());
  const formData = new FormData();
  for (const key in formValues) { // eslint-disable-line no-restricted-syntax, guard-for-in
    formData.append(key, formValues[key]);
  }
  const formResult = yield call(
    request,
    c.FETCH_STATE_URL(state),
    {
      method: 'POST',
      body: formData,
    });

  if (!formResult.err) {
    yield put(actions.loadResults(formResult.data));
    // if the form worked, redirect to page with registration status
    if (formResult.data.registered !== undefined) {
      browserHistory.push(`/check/${state}/${formResult.data.registered}`);
    }
  } else {
    yield put(actions.setApiErrMsg(messages.apiErr));
  }
}

export function* registerNow() {
  const state = yield select(selectors.selectCurrentState());
  browserHistory.push(`/check/${state}/`);
}

export function* checkRegSaga() {
  yield fork(takeLatest, c.FETCH_STATES, fetchStates);
  yield fork(takeLatest, c.FETCH_INITIAL_STATE, fetchInitialState);
  yield fork(takeLatest, c.CHANGE_STATE, changeState);
  yield fork(takeLatest, c.SUBMIT_FORM, submitForm);
  yield fork(takeLatest, c.REGISTER_NOW, registerNow);
}

// All sagas to be loaded
export default [
  checkRegSaga,
];
