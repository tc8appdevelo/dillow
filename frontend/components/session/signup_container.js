import { connect } from 'react-redux';
import { signup, logout } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(signup(user)),
    formType: "Create Account"
})


export default connect(null, mapDispatchToProps)(Signup);

