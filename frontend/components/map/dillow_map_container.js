import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import DillowMap from './dillow_map';

function mSTP(state) {
  return ({
    listings: Object.assign({}, state.entities.listings)
  });
}

function mDTP(dispatch) {
  return ({
    fetchListings: () => dispatch(fetchListings())
  });
}

export default connect(mSTP, mDTP)(DillowMap)