import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(login(user)),
    loginAction: user => dispatch(login(user)),
    formType: "Login",
    buttonRoute: "/"
})

export default connect(null, mapDispatchToProps)(Signup);