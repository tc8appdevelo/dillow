import { connect } from 'react-redux';
import { fetchSavedListings } from '../../actions/listing_actions';
import SavedListings from './saved_listings';

// function mSTP(state) {
//   return ({
//     listings: Object.values(state.entities.listings)
//   });
// }

function mDTP(dispatch) {
  return ({
    savedListings: dispatch(fetchSavedListings()),
  })
}

export default connect(null, mDTP)(SavedListings);

