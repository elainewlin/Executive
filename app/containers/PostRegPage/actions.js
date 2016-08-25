import * as c from './constants';

export function submitEmail(params) {
  return {
    type: c.SUBMIT_EMAIL,
    params,
  };
}

export function updateEmailStatus(status) {
  return {
    type: c.UPDATE_EMAIL_STATUS,
    status,
  };
}
