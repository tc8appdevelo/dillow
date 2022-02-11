
import { connect } from 'react-redux';
import { fetchSavedListings, fetchListings, deleteListing } from '../../actions/listing_actions'
import Profile from './profile';



const mSTP = (state, ownProps) => ({
    ownProps,
    currentUser: state.session.currentUser,
    savedListings: Object.values(state.savedListings),
});

function mDTP(dispatch) {
    return ({
      fetchSavedListings: () => dispatch(fetchSavedListings()),
      
      unSaveListing: id => dispatch(unSaveListing(id)),
    })
  }
  
export default connect(mSTP, mDTP)(Profile);