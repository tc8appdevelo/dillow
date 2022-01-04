import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/nav_bar_container";
import Profile from "./navbar/proflile";

const App = () => (
    <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={NavBarContainer} />
    </Switch>
);

export default App;

