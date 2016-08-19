/*
 *
 * CheckRegPage constants
 *
 */

import * as cfg from 'config';

export const SUBMIT_EMAIL = 'app/CheckRegPage/SUBMIT_EMAIL';
export const FETCH_MAILCHIMP_URL = `https://us14.api.mailchimp.com/2.0/lists/subscribe.json?apikey=${cfg.MAILCHIMP_API}&id=${cfg.LIST_ID}&double_optin=false&email[email]=`;
