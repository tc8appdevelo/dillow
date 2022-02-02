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
    .then(listing => dispatch(receiveListing(listing)));

export const unSaveListing = id => dispatch => deleteSavedListing(id)
    .then(listing => dispatch(receiveListing(listing)));

export const fetchSavedListings = () => dispatch => {
    return getSavedListings()
            .then(savedListings => dispatch(receiveSavedListings(savedListings)))
}

