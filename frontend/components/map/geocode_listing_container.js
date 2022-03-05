import { connect } from 'react-redux';
import { fetchListings, editListing } from '../../actions/listing_actions';
import GeocodeListing from './geocode_listing';

function mSTP(state, ownProps) {
  return ({
    listings: Object.values(state.entities.listings),
    filters: state.filters, 
  });
}

function mDTP(dispatch) {
  return ({
    fetchListings: (filters) => dispatch(fetchListings(filters)),
    editListing: (listing, id) => dispatch(editListing(listing, id)),
  });
}

export default connect(mSTP, mDTP)(GeocodeListing);