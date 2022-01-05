import React from 'react';
import CreateLoginBox from '../navbar/create_login_box';
import { Link } from 'react-router-dom';
import BuyDropdown from './buy_dropdown';



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentUser: this.props.currentUser };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {

        this.setState({ currentUser: null });
        this.props.logout();
    }

    render() {

        
        return (


            <nav className="nav-bar">
                <div id="buy">Buy</div>
                <ul className="nav-list">

                    <li className="left-buttons">
                        <ul className="left-buttons-list">
                            <div id="buy">Buy</div>
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
                            <li>{this.props.currentUser ? <Link to={"/login"} onClick={this.handleLogout}>Logout</Link>
                                : <CreateLoginBox />} </li>
                        </ul>
                    </li>

                </ul>
                <div id="dpd">
                <div className="spacer"></div>
                    <BuyDropdown />
                <div className="spacer"></div>
                </div>
            </nav>

        )
    }
}

export default NavBar;