import React from 'react';
import ProfileButton from './profile_button';
import CreateLoginBox from './create_login_box';
import { Link } from 'react-router-dom';
import BuyDropdown from './buy_dropdown'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    render() {
        const isLoggedIn = this.props.currentUser;
            return (
                <nav className="nav-bar">
                    <ul className="nav-list">

                        <li className="left-buttons">
                            <ul className="left-buttons-list">
                                <li className="buy-div">Buy
                                    
                                </li>
                                <li>Rent</li>
                                <li>Sell</li>
                                <li>Home Loans</li>
                                <li>Agent Finder</li>
                            </ul>
                        </li>
                        <li><h1 className="title">dillow</h1></li>
                        <li className="right-buttons">
                            <ul className="right-buttons-list">
                                <li>Manage Rentals</li>
                                <li>Advertise</li>
                                <li>Help</li>
                                <li>
                                    {/* <Link to={"/login"} onClick={this.props.logout}>Logout</Link> */}
                                    <button onClick={this.props.logout}>Logout</button>
                                </li>
                                <li>
                                    <Link to={'/profile'}>Profile</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            )
    }
}

export default NavBar;