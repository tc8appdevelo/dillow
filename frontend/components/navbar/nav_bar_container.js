
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';



const mSTP = state => ({
    currentUser: state.session.currentUser,
});

function mDTP(dispatch) {

    return ({
        logout: () => dispatch(logout()),
    });
}

export default connect(mSTP, mDTP)(NavBar);