import expect from 'expect';
import checkRegPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('checkRegPageReducer', () => {
  it('returns the initial state', () => {
    expect(checkRegPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
