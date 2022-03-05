import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import GeocodeLatLng from "./utils/geocode_lat_lng";
import * as actions from './actions/listing_actions';
import * as utils from './utils/listing_api_util';

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUser: {
                    id: window.currentUser.id,
                    email: window.currentUser.email
                }
            },
            
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.actions = actions;
    window.utils = utils;
    window.geocodeLatLng = new GeocodeLatLng({}, (listing, id) => store.dispatch(actions.editListing(listing, id)));

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});