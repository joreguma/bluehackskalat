
import { fromJS } from 'immutable';
import groupReducer from '../reducer';

describe('groupReducer', () => {
  it('returns the initial state', () => {
    expect(groupReducer(undefined, {})).toEqual(fromJS({}));
  });
});
