import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import NavBar from './nav_bar';



// const mSTP = state => ({
//     currentUser: state.session.currentUser,
// });

const mSTP = state => {
    console.log("this ran mstp nav bar")
    return ({
        currentUser: state.session.currentUser,
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(NavBar);