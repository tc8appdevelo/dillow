
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchSavedListings, fetchListings } from '../../actions/listing_actions';
import NavBar from './nav_bar';



const mSTP = state => ({
    currentUser: state.session.currentUser,
});

function mDTP(dispatch) {

    return ({
        logout: () => dispatch(logout()),
        fetchSavedListings: () => dispatch(fetchSavedListings()),
    });
}

export default connect(mSTP, mDTP)(NavBar);