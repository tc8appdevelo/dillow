import { connect } from 'react-redux';
import { fetchListings } from '../../actions';
import DillowMap from './dillow_map';

function mSTP(state) {
  return ({
    listings: Object.values(state.entities.listings)
  });
}

function mDTP(dispatch) {
  return ({
    fetchListings: () => dispatch(fetchListings())
  });
}

export default connect(mSTP, mDTP)(DillowMap)