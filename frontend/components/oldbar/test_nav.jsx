import React from 'react';
import CreateLoginBox from '../navbar/create_login_box';
import { Link } from 'react-router-dom';




class TestNav extends React.Component {
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

        console.log(`props ${this.props}`)
        console.log(`state ${this.state}`)
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
                            <li>{this.props.currentUser ? <Link to={"/login"} onClick={this.handleLogout}>Logout</Link> 
                                                            : <CreateLoginBox />} </li>
                        </ul>
                    </li>

                </ul>

            </nav>
        )
    }
}

export default TestNav;