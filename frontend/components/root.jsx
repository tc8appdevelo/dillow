import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App'
import SignupContainer from './session/signup_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;