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
        this.loginDemoUser = this.loginDemoUser.bind(this);

    }

    loginDemoUser() {
        this.props.loginAction({
            email: "demo_user",
            password: "password"
        }).then(this.setState(this.props.currentUser))
    }

    handleLogout() {
        this.setState({ currentUser: null });
        this.props.logout();
    }

    toggleLoginPage = () => this.setState(state => ({
        showLogin: !state.showLogin
    }))

    toggleProfilePage = () => this.setState(state => ({
        showProfile: !state.showProfile
    }))
    
    toggleDropdown = () => this.setState(state => ({
        showDropdown: !state.showDropdown
    }))

    render() {
        let isVisible = this.state.showDropdown ? "visible" : ""
        let isLogin = this.state.showLogin ? "visible" : ""
        let showProfile = this.state.currentUser ? "visible" : ""
        return (
            <nav className="nav-bar">

                <ul className="nav-list">

                    <li className="left-buttons">
                        <ul className="left-buttons-list">

                            <li id="buy-hover" className="buy-hover-class"
                                onMouseEnter={this.toggleDropdown}
                                onMouseLeave={this.toggleDropdown}>Buy</li>

                            <li>Rent</li>
                            <li>Sell</li>
                        </ul>
                    </li>
                    <div id="dillow-title">dillow</div>
                    <li className="right-buttons">
                        <ul className="right-buttons-list">
                            {/* <li>Manage Rentals</li>
                            <li>Advertise</li>
                            <li>Help</li> */}
                            <li>{this.props.currentUser ? <button id="toggleProfileDropdown" onClick={this.handleLogout}>Log out</button>
                                : <button id="toggleLoginPage" onClick={this.toggleLoginPage}>Sign in</button>} </li>

                            <button id="profile-button" className={showProfile} onClick={this.toggleLoginPage}>Profile</button>
                        </ul>
                    </li>

                </ul>

                <div id="loginPopup" className={isLogin}>
                    <LoginPage exitPage={this.toggleLoginPage} />
                </div>
    
                 <div id="popup" className={isVisible}>
                    <div id="buy-hover" className="buy-hover-class"
                        onMouseEnter={this.toggleDropdown}
                        onMouseLeave={this.toggleDropdown}>
                        <BuyDropdown />
                   </div>

                    
                </div>
            </nav>
        )
    }
}

export default NavBar;