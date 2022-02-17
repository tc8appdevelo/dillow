import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { fetchSavedListings } from '../../actions/listing_actions';
import Signup from './signup';

const mSTP = state => ({
    errors: Object.values(state.errors),
})


const mapDispatchToProps = dispatch => ({
    formAction: user => dispatch(signup(user)),
    loginAction: user => dispatch(login(user)),
    fetchSavedListings: () => dispatch(fetchSavedListings()),
    formType: "Create account",
    buttonRoute: "/"
})

export default connect(mSTP, mapDispatchToProps)(Signup);

