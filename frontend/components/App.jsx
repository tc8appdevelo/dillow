import React from "react";
import { Route, Switch } from 'react-router-dom'
//import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/nav_bar_container";

const App = () => (
    <Switch>
        <Route exact path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
        
    </Switch>
);

export default App;

