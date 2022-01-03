import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/nav_bar_container";

const App = () => (
    <Switch>
        
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/protected" component={NavBarContainer} />
        <Route path="/" component={NavBarContainer} />
    </Switch>
);

export default App;

