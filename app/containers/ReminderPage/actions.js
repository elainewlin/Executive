import * as c from './constants';

export function submitForm() {
  return {
    type: c.SUBMIT_FORM,
  };
}

export function updateEmailStatus(status) {
  return {
    type: c.UPDATE_EMAIL_STATUS,
    status,
  };
}
