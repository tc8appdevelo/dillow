import { connect } from 'react-redux';
import { fetchListings, deleteListing, editListing } from '../../actions/listing_actions';
import CurrentlySelling from './currently_selling';

function mSTP(state, ownProps) {
  return ({
    currentlySelling: Object.values(state.entities.listings),
    currentUser: state.session.currentUser,
  })
}

function mDTP(dispatch) {
  return ({
    fetchListings: (data) => dispatch(fetchListings(data)),
    editListing: listing => dispatch(editListing(listing)),
    deleteListing: listing => dispatch(deleteListing(listing)),
  })
}

export default connect(mSTP, mDTP)(CurrentlySelling);