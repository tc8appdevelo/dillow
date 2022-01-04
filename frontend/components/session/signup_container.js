import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(signup(user)),
    loginAction: user => dispatch(login(user)),
    formType: "Create Account",
    buttonRoute: "/login"
})


export default connect(null, mapDispatchToProps)(Signup);

