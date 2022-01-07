import React from 'react';
import ProfileButton from './profile_button';
import CreateLoginBox from './create_login_box';
import { Link } from 'react-router-dom';
import BuyDropdown from './buy_dropdown'
class LoggedOutNavBar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const isLoggedIn = this.props.currentUser;
        //if (isLoggedIn) {
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
                    <li><h1>dillow</h1></li>
                    <li className="right-buttons">
                        <ul className="right-buttons-list">
                            <li>Manage Rentals</li>
                            <li>Advertise</li>
                            <li>Help</li>
                            <li>
                                <CreateLoginBox />
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )


    }
}

export default LoggedOutNavBar;