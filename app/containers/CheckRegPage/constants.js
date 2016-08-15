/*
 *
 * CheckRegPage constants
 *
 */

import * as cfg from 'config';

/* action constants */
export const FETCH_STATES = 'app/CheckRegPage/FETCH_STATES';
export const FETCH_INITIAL_STATE = 'app/CheckRegPage/FETCH_INITIAL_STATE';
export const LOAD_STATES = 'app/CheckRegPage/LOAD_STATES';
export const CHANGE_STATE = 'app/CheckRegPage/CHANGE_STATE';
export const LOAD_STATE_FORM = 'app/CheckRegPage/LOAD_STATE_FORM';
export const SUBMIT_FORM = 'app/CheckRegPage/SUBMIT_FORM';
export const LOAD_RESULTS = 'app/CheckRegPage/LOAD_RESULTS';
export const SET_API_ERR_MSG = 'app/CheckRegpage/SET_API_ERR_MSG';
export const SUBMIT_EMAIL = 'app/CheckRegPage/SUBMIT_EMAIL';

/* API URLs */
export const FETCH_STATES_URL = `${cfg.API_BASE}/check-registration-form/`;
export const FETCH_STATE_URL = (state) => `${FETCH_STATES_URL}${state}/`;
export const FETCH_LOCATION_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${cfg.GOOGLE_MAPS_API}`;
export const FETCH_ADDRESS_URL = (lat, lng) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${cfg.GOOGLE_MAPS_API}`;
export const FETCH_MAILCHIMP_URL = `https://us14.api.mailchimp.com/2.0/lists/subscribe.json?apikey=${cfg.MAILCHIMP_API}&id=${cfg.LIST_ID}&double_optin=false&email[email]=`;
