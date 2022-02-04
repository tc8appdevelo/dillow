import {
    RECEIVE_LISTINGS,
    RECEIVE_LISTING,
    REMOVE_LISTING,
} from '../actions/listing_actions';



const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LISTING:
            return newState;
        case RECEIVE_LISTINGS:
            newState = Object.assign({}, action.listings)
            return newState;
        case REMOVE_LISTING:
            delete newState[action.listing.id];
            return newState;
        default:
            return state;
    }
};

export default listingsReducer;