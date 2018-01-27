import { createSelector } from 'reselect';

/**
 * Direct selector to the group state domain
 */
const selectGroupDomain = (state) => state.get('group');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Group
 */

const makeSelectGroup = () => createSelector(
  selectGroupDomain,
  (substate) => substate.toJS()
);

export default makeSelectGroup;
export {
  selectGroupDomain,
};
