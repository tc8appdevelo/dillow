import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingIndex from './listing_index'



function mSTP(state) {
    return ({
        listings: Object.values(state.entities.listings)
    });
}

function mDTP(dispatch) {
    return ({
        fetchListings: () => dispatch(fetchListings())
    });
}

export default connect(mSTP, mDTP)(ListingIndex);