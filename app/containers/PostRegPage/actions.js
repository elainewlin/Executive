import * as c from './constants';

export function submitEmail(params) {
  return {
    type: c.SUBMIT_EMAIL,
    params,
  };
}
