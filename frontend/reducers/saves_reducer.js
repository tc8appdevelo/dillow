import {
  RECEIVE_LISTINGS,
  RECEIVE_SAVED_LISTINGS,
} from "../actions/listing_actions"

const savesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SAVED_LISTINGS:
      newState = Object.assign({}, action.savedListings)
      return newState
    default:
      return state;
  }
}

export default savesReducer;