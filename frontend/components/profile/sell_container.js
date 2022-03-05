import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createListing, editListing, fetchListings } from '../../actions/listing_actions';

import Sell from './sell';

const mSTP = state => ({
    currentUser: state.session.currentUser,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createListing: listing => dispatch(createListing(listing)),
    editListing: (listing, id) => dispatch(editListing(listing, id)),
    fetchListings: (filter) => dispatch(fetchListings(filter)),
})

export default withRouter(connect(mSTP, mDTP)(Sell));