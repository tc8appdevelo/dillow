import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import CurrentlySelling from './currently_selling';

function mSTP(state) {
  return ({
    currentlySelling: Object.values(state.entities.listings),
    currentUser: state.session.currentUser,
  })
}

function mDTP(dispatch) {
  return ({
    fetchListings: (data) => dispatch(fetchListings(data)),
  })
}

export default connect(mSTP, mDTP)(CurrentlySelling);