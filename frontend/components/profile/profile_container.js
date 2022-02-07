
import { connect } from 'react-redux';
import { fetchSavedListings, fetchListings, deleteListing } from '../../actions/listing_actions'
import Profile from './profile';



const mSTP = state => ({
    currentUser: state.session.currentUser,
});

// function mDTP(dispatch) {
//     fetchListings: 
// }

export default connect(mSTP, null)(Profile);