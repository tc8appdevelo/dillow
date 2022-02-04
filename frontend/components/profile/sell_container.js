import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import Sell from './sell';

const mSTP = state => ({
    currentUser: state.session.currentUser,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createListing: listing => dispatch(createListing(listing)),
})

export default connect(mSTP, mDTP)(Sell);