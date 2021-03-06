import {
  RECEIVE_SAVED_LISTINGS,
  RECEIVE_SAVED_LISTING,
  REMOVE_SAVED_LISTING,
} from "../actions/listing_actions"

const savesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SAVED_LISTINGS:
      newState = Object.assign({}, action.savedListings)
      
      return newState
    case REMOVE_SAVED_LISTING:
      
      delete newState[action.savedListing.listing_id];
      return newState;
    case RECEIVE_SAVED_LISTING:
      
      
      return Object.assign({}, state, action.savedListing);
    default:
      return state;
  }
}

export default savesReducer;