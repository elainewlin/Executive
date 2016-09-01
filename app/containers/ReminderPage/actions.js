import * as c from './constants';

export function submitEmail() {
  return {
    type: c.SUBMIT_EMAIL,
  };
}

export function updateEmailStatus(status) {
  return {
    type: c.UPDATE_EMAIL_STATUS,
    status,
  };
}
