import { connect } from 'react-redux';
import EditListing from './edit_listing';
import { editListing } from '../../actions/listing_actions';

const mSTP = (state, ownProps) => {
  return ({
      currentUser: state.session.currentUser,
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    editListing: listing => dispatch(editListing(listing)),
})

export default connect(mSTP, mDTP)(EditListing);