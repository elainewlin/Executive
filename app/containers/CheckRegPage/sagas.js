import { takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import request from 'superagent';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';
import * as cfg from 'config';

export function* fetchInitialState() {
  const FETCH_LOCATION_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${cfg.GOOGLE_MAPS_API}`;
  const location = yield request.post(FETCH_LOCATION_URL).accept('json');
  if (location.status === 200) {
    const locationData = location.body;
    const lat = locationData.location.lat;
    const lng = locationData.location.lng;
    const FETCH_ADDRESS_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${cfg.GOOGLE_MAPS_API}`;

    const addressResponse = yield request.post(FETCH_ADDRESS_URL).accept('json');
    if (addressResponse.status === 200) {
      const addressData = addressResponse.body;
      const address = addressData.results[0].address_components;
      const state = address.filter((addr) =>
        addr.types.indexOf('administrative_area_level_1') > -1
      );
      yield put(actions.changeState(state[0].short_name));
    }
  }
}

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
  }
}

export function* checkRegSaga() {
  yield fork(takeEvery, c.FETCH_STATES, fetchStates);
  yield fork(takeEvery, c.FETCH_INITIAL_STATE, fetchInitialState);
  yield fork(takeEvery, c.CHANGE_STATE, changeState);
  yield fork(takeEvery, c.SUBMIT_FORM, submitForm);
}

// All sagas to be loaded
export default [
  checkRegSaga,
];
