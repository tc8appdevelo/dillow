import React from 'react';
import { Link } from 'react-router-dom';
import BuyDropdown from './buy_dropdown';
import LoginPage from "../session/login_page";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentUser: props.currentUser,
            showDropdown: false,
            showLogin: false,
            showRentDropdown: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleLoginPage = this.toggleLoginPage.bind(this);
        this.toggleRentDropdown = this.toggleRentDropdown.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }



    loginDemoUser() {
        this.props.loginAction({
            email: "demo_user",
            password: "password"
        })
    }

    handleLogout() {
        this.setState({ currentUser: null });
        this.props.logout().then(() => this.props.fetchSavedListings())
        .then(() => {
            if (this.props.profileLogout) {
                this.props.profileLogout();
            }
        });
    }
    handleProfile(e) {
        e.preventDefault();

    }

    toggleLoginPage = () => this.setState(state => ({
        showLogin: !state.showLogin
    }))

    toggleProfilePage = () => this.setState(state => ({
        showProfile: !state.showProfile
    }))
    
    toggleDropdown = () => { this.setState(state => ({
            showDropdown: !state.showDropdown
        }))
    }

    fixToggleDropdown = () => {
        this.setState({
            showDropdown: false
        })
    }

    toggleRentDropdown() {
        this.setState({ showRentDropdown: !this.state.showRentDropdown });
    }



    render() {
        let isVisible = this.state.showDropdown ? "visible" : ""
        let isLogin = this.state.showLogin ? "visible" : ""

        let currentUser;

        if (this.props.currentUser) {
            currentUser = this.props.currentUser;
        } else {
            currentUser = null;
        }
        return (
            <div>
            <nav className="nav-bar">
                
                <ul className="nav-list">

                    <li className="left-buttons">
                        <ul className="left-buttons-list">

                            <li id="buy-hover" className="buy-hover-class"
                                onMouseEnter={this.toggleDropdown}
                                onMouseLeave={this.fixToggleDropdown}>
                                    <Link className="buy-link" to={'/homes'}>Buy</Link>
                                </li>
                                {currentUser ? <li><Link className="buy-link" to={'/sell'}>Sell</Link></li> : <li><button id="toggleLoginPage" onClick={this.toggleLoginPage}>Sell</button> </li>}
                                
                        </ul>
                    </li>
                    <Link to='/' id="dillow-title">Dillow</Link>
                    
                    <li className="right-buttons">
                        <ul className="right-buttons-list">
                            <li>{this.props.currentUser ? 
                                <div>
                                    <button id="toggleProfileDropdown" onClick={this.handleLogout}>Log out</button>
                                    <Link className="profile-link" to={'/profile'}>Profile</Link>
                                    {/* <ProfileDropdown /> */}
                                </div> : <button id="toggleLoginPage" onClick={this.toggleLoginPage}>Sign in</button>} </li>

                        </ul>
                    </li>

                </ul>

                <div id="loginPopup" className={isLogin}>
                    <LoginPage exitPage={this.toggleLoginPage} />
                </div>
                    
                 {/* <div id="popup" className={isVisible}>
                    <div id="buy-hover" className="buy-hover-class"
                        onMouseEnter={this.toggleDropdown}
                        onMouseLeave={this.toggleDropdown}>
                        <BuyDropdown />
                   </div>
                </div> */}

                
        
            </nav>
    </div>
        )
    }
}

export default NavBar;