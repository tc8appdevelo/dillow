import { connect } from 'react-redux';
import { fetchSavedListings, unSaveListing, saveListing } from '../../actions/listing_actions';
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
    unSaveListing: id => dispatch(unSaveListing(id)),
    saveListing: id => dispatch(saveListing(id)),
  })
}

export default connect(mSTP, mDTP)(SavedListings);

