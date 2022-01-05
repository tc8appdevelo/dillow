import React from 'react';
import CreateLoginBox from '../session/create_login_box';
import { Link } from 'react-router-dom';
import BuyDropdown from './buy_dropdown';
import LoginPage from "../session/login_page"

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentUser: this.props.currentUser,
            showDropdown: false,
            showLogin: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleLoginPage = this.toggleLoginPage.bind(this);
    }

    loginDemoUser() {
        this.props.loginAction({
            email: "demo_user",
            password: "password"
        })
    }

    handleLogout() {
        this.setState({ currentUser: null });
        this.props.logout();
    }

    toggleLoginPage = () => this.setState(state => ({
        showLogin: !state.showLogin
    }))
    
    toggleDropdown = () => this.setState(state => ({
        showDropdown: !state.showDropdown
    }))

    render() {
        let isVisible = this.state.showDropdown ? "visible" : ""
        let isLogin = this.state.showLogin ? "visible" : ""
        return (
            <nav className="nav-bar">
                <div id="buy">Buy</div>
                <ul className="nav-list">

                    <li className="left-buttons">
                        <ul className="left-buttons-list">

                            <li id="buy-hover"
                                onMouseEnter={this.toggleDropdown}
                                onMouseLeave={this.toggleDropdown}>Buy</li>

                            <li>Rent</li>
                            <li>Sell</li>
                            <li>Home Loans</li>
                            <li>Agent Finder</li>
                        </ul>
                    </li>
                    <div id="dillow-title">dillow</div>
                    <li className="right-buttons">
                        <ul className="right-buttons-list">
                            <li>Manage Rentals</li>
                            <li>Advertise</li>
                            <li>Help</li>
                            <li>{this.props.currentUser ? <button onClick={this.handleLogout}>Logout</button>
                                : <CreateLoginBox />} </li>

                            <button onClick={this.toggleLoginPage}>ToggleLoginPage</button>
                        </ul>
                    </li>

                </ul>

                <div id="loginPopup" className={isLogin}>
                    <LoginPage />
                </div>
    
                 <div id="popup" className={isVisible}>
                    <div className="spacer"></div>
                        <BuyDropdown />
                    <div>Or connect with:</div>
                    <div className="spacer"></div>
                </div>
            </nav>
        )
    }
}

export default NavBar;