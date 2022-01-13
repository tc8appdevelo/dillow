import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Splash from "./splash/splash";
import ProfileContainer from "./profile/profile_container";
import ListingIndexContainer from "./listings/listing_index_container";





const App = () => (
    <div>
        
        <Switch>
            
            <Route path="/homes" component={ListingIndexContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/" component={Splash} />
        </Switch>
        
    </div>

);

export default App;

