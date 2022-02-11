import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createListing } from '../../actions/listing_actions';
import Sell from './sell';

const mSTP = state => ({
    currentUser: state.session.currentUser,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createListing: listing => dispatch(createListing(listing)),
})

export default withRouter(connect(mSTP, mDTP)(Sell));