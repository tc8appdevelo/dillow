import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

import DillMap from './dill_map';

function mSTP(state, ownProps) {
  return ({
    listings: Object.values(state.entities.listings),
    filters: state.filters, 
  });
}

function mDTP(dispatch) {
  return ({
    fetchListings: () => dispatch(fetchListings())
  });
}

export default connect(mSTP, mDTP)(DillMap);