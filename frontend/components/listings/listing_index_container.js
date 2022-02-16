import { connect } from 'react-redux';
import { fetchListings, fetchSavedListings, saveListing, unSaveListing } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import ListingIndex from './listing_index'



function mSTP(state) {
    return ({
        listings: Object.values(state.entities.listings),
        savedListings: Object.values(state.savedListings),
        currentUser: state.session.currentUser,
        filters: state.filters,
    });
}

function mDTP(dispatch) {
    return ({
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        fetchListings: (filter) => dispatch(fetchListings(filter)),
        fetchSavedListings: () => dispatch(fetchSavedListings()),
        saveListing: id => dispatch(saveListing(id)),
        unSaveListing: id => dispatch(unSaveListing(id)),
    });
}

export default connect(mSTP, mDTP)(ListingIndex);