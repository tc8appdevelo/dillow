import { connect } from 'react-redux';
import BuyRentSell from './buy_rent_sell';



function mSTP(state) {
    return ({
        currentUser: state.session.currentUser
    });
}

// function mDTP(dispatch) {
//     return ({
//         updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
//         fetchListings: (filter) => dispatch(fetchListings(filter)),
//         fetchSavedListings: () => dispatch(fetchSavedListings()),
//         saveListing: id => dispatch(saveListing(id)),
//         unSaveListing: id => dispatch(unSaveListing(id)),
//     });
// }

export default connect(mSTP, null)(BuyRentSell);