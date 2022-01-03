import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(login(user)),
    formType: "Login"
})


export default connect(null, mapDispatchToProps)(Signup);