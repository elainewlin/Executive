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

/* Field type constants */

export const TEXT_FIELD = 'TEXT';
export const SELECT_FIELD = 'SELECT';
export const CHECK_FIELD = 'CHECK';
export const HIDDEN_FIELD = 'HIDDEN';
