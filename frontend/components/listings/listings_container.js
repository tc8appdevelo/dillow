import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings'



function mSTP(state) {
    debugger
    return ({
        listings: Object.values(state.entities.listings)
    });
}

function mDTP(dispatch) {
    return ({
        fetchListings: () => dispatch(fetchListings())
    });
}

export default connect(mSTP, mDTP)(Listings);