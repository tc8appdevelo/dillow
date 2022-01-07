import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { listings, fetchListings } from "./actions/listing_actions"
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
    window.listings = listings;
    window.fetchListings = fetchListings;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});