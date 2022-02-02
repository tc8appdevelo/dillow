import { connect } from 'react-redux';
import { fetchSavedListings, saveListing, unSaveListing } from '../../actions/listing_actions';
import SavedListings from './saved_listings';

function mSTP(state) {
  return ({
    savedListings: Object.values(state.savedListings),
    currentUser: state.session.currentUser,
  })
}

function mDTP(dispatch) {
  return ({
    fetchSavedListings: () => dispatch(fetchSavedListings()),
    saveListing: id => dispatch(saveListing(id)),
    unSaveListing: id => dispatch(unSaveListing(id)),
  })
}

export default connect(mSTP, mDTP)(SavedListings);

