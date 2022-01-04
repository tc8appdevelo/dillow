import React from 'react';
import ProfileButton from './profile_button';
import CreateLoginBox from './create_login_box';
import { Link } from 'react-router-dom';

class OtherNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.renderSignInOrProfile = this.renderSignInOrProfile.bind(this);
        this.statusButton = this.renderSignInOrProfile();
    }


    handleLogout() {
        this.props.logout();
    }

    renderSignInOrProfile() {
        return (
            <div>Sign In</div>
        )
    }


    render() {
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
                    {this.statusButton}
                </div>
            )
        }

    }
}

export default OtherNavBar;