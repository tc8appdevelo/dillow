import React from 'react';
import ProfileButton from './profile_button';
import CreateLoginBox from './create_login_box';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogout() {
        this.props.logout();
    }


    render () {
        const isLoggedIn = this.props.currentUser;
        if (isLoggedIn) {
            return (
                <div className="nav-bar">
                    <ProfileButton />
                    <Link to="/login" onClick={this.props.logout}>Logout</Link>
                </div>
            )
        } else {
            return (
                <div className="nav-bar">
                    <CreateLoginBox />

                </div>
            )
        }

    }
}

export default NavBar;