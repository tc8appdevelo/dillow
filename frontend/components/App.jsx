import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Splash from "./splash/splash";
import Profile from "./profile/proflile";




const App = () => (
    <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Splash} />
    </Switch>
);

export default App;

