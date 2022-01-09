import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Profile from './profile';

const mSTP = state => ({
    currentUser: state.session.currentUser,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

// const mapDispatchToProps = dispatch => ({
//     formAction: user => dispatch(login(user)),
//     loginAction: user => dispatch(login(user)),
//     formType: "Login",
//     buttonRoute: "/"
// })

export default connect(mSTP, mDTP)(Profile);