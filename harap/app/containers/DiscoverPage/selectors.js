import { createSelector } from 'reselect';

/**
 * Direct selector to the discoverPage state domain
 */
const selectDiscoverPageDomain = (state) => state.get('discoverPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DiscoverPage
 */

const makeSelectDiscoverPage = () => createSelector(
  selectDiscoverPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectDiscoverPage;
export {
  selectDiscoverPageDomain,
};
