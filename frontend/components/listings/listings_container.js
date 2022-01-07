import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Listings from './listings'


// const mapStateToProps = state => ({
//     listings: state.entities.listings,
// });

// function mapDispatchToProps(dispatch) {
//     debugger
//     return ({
//         fetchListings: () => dispatch(fetchListings()),
//     });
// }  

const mSTP = (state = {}) => ({
    listings: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(Listings);