/*
 *
 * CheckRegForm constants
 *
 */

import * as cfg from 'config';

/* action constants */
export const FETCH_STATES = 'app/CheckRegForm/FETCH_STATES';
export const FETCH_INITIAL_STATE = 'app/CheckRegForm/FETCH_INITIAL_STATE';
export const LOAD_STATES = 'app/CheckRegForm/LOAD_STATES';
export const CHANGE_STATE = 'app/CheckRegForm/CHANGE_STATE';
export const LOAD_STATE_FORM = 'app/CheckRegForm/LOAD_STATE_FORM';
export const SUBMIT_FORM = 'app/CheckRegForm/SUBMIT_FORM';
export const LOAD_RESULTS = 'app/CheckRegForm/LOAD_RESULTS';
export const SET_API_ERR_MSG = 'app/CheckRegForm/SET_API_ERR_MSG';

/* Field type constants */
export const TEXT_FIELD = 'TEXT';
export const SELECT_FIELD = 'SELECT';
export const CHECK_FIELD = 'CHECK';
export const HIDDEN_FIELD = 'HIDDEN';

/* API URLs */
export const FETCH_STATES_URL = `${cfg.API_BASE}/check-registration-form/`;
export const FETCH_STATE_URL = (state) => `${FETCH_STATES_URL}${state}/`;
export const FETCH_LOCATION_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${cfg.GOOGLE_MAPS_API}`;
export const FETCH_ADDRESS_URL = (lat, lng) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${cfg.GOOGLE_MAPS_API}`;
