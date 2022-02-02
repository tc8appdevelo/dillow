import { connect } from 'react-redux';
import { fetchSavedListings } from '../../actions/listing_actions';
import SavedListings from './saved_listings';

function mSTP(state) {
  return ({
    savedListings: state.savedListings,
    currentUser: state.session.currentUser,
  })
}

function mDTP(dispatch) {
  return ({
    fetchSavedListings: () => dispatch(fetchSavedListings()),
  })
}

export default connect(mSTP, mDTP)(SavedListings);

