import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchSavedListings } from '../../actions/listing_actions';

import Signup from './signup';

const mSTP = state => ({
    errors: Object.values(state.errors),
})

const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(login(user)),
    loginAction: user => dispatch(login(user)),
    fetchSavedListings: () => dispatch(fetchSavedListings()),
    formType: "Login",
    buttonRoute: "/"
})

export default connect(mSTP, mapDispatchToProps)(Signup);