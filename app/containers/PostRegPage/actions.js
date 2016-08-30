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

export function closeModal() {
  return {
    type: c.CLOSE_MODAL,
  };
}

export function showModal() {
  return {
    type: c.SHOW_MODAL,
  };
}
