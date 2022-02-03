import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Splash from "./splash/splash";
import SellContainer from "./profile/sell_container";
import ListingIndexContainer from "./listings/listing_index_container";
import SavedListingsContainer from "./saves/saved_listings_container";
import CurrentlySellingContainer from "./profile/currently_selling_container";
import Profile from "./profile/profile";

const App = () => (
    <div>
        
        <Switch>
            <Route path="/homes" component={ListingIndexContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/sell" component={SellContainer} />
            <Route path="/profile" component={Profile} />
            <Route path="/selling" component={CurrentlySellingContainer} />
            <Route path="/" component={Splash} />
        </Switch>
        
    </div>

);

export default App;

