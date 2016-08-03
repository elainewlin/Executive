/*
 *
 * CheckRegPage constants
 *
 */

import * as cfg from 'config';

/* action constants */
export const FETCH_STATES = 'app/CheckRegPage/FETCH_STATES';
export const FETCH_STATES_URL = `${cfg.API_BASE}/check-registration-form/`;

export const LOAD_STATES = 'app/CheckRegPage/LOAD_STATES';
export const CHANGE_STATE = 'app/CheckRegPage/CHANGE_STATE';
export const LOAD_STATE_FORM = 'app/CheckRegPage/LOAD_STATE_FORM';
export const SUBMIT_FORM = 'app/CheckRegPage/SUBMIT_FORM';
export const LOAD_RESULTS = 'app/CheckRegPage/LOAD_RESULTS';
