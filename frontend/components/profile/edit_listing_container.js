import { connect } from 'react-redux';
import EditListing from './edit_listing';
import { editListing } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
      currentUser: state.session.currentUser,
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    editListing: (listing, id) => dispatch(editListing(listing, id)),
})

export default withRouter(connect(mSTP, mDTP)(EditListing));