import {
    getListings,
    getListing,
    getSavedListings,
    postSavedListing,
    deleteSavedListing,
} from '../utils/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_SAVED_LISTINGS = 'RECEIVE_SAVED_LISTINGS';
export const RECEIVE_SAVED_LISTING = 'RECEIVE_SAVED_LISTING';
export const REMOVE_SAVED_LISTING = 'REMOVE_SAVED_LISTING';

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings,
});

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing,
});

export const receiveSavedListings = savedListings => ({
    type: RECEIVE_SAVED_LISTINGS,
    savedListings,
});

export const receiveSavedListing = savedListing => ({
    type: RECEIVE_SAVED_LISTING,
    savedListing,
});

export const removeSavedListing = savedListing => ({
    type: REMOVE_SAVED_LISTING,
    savedListing,
});

// export const listings = () => dispatch => (
//     getListings().then(listings => dispatch(receiveListings(listings)))
// )

export const fetchListings = () => dispatch => {

    return getListings()
            .then(listings => dispatch(receiveListings(listings)))
}

export const fetchListing = listing => dispatch => (
    getListing(listing).then(listing => dispatch(receiveListing(listing)))
)

export const saveListing = id => dispatch => postSavedListing(id)
    .then(savedListing => dispatch(receiveSavedListing(savedListing)));

export const unSaveListing = id => dispatch => deleteSavedListing(id)
    .then(savedListing => dispatch(removeSavedListing(savedListing)));

export const fetchSavedListings = () => dispatch => {
    return getSavedListings()
            .then(savedListings => dispatch(receiveSavedListings(savedListings)))
}

