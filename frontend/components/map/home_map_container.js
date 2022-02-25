import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import HomeMap from './home_map';

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

export default connect(mSTP, mDTP)(HomeMap);