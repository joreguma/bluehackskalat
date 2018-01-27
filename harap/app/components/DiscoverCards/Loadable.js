/**
 *
 * Asynchronously loads the component for DiscoverCards
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
