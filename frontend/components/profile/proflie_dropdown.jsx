import React from 'react';
import { Link } from 'react-router-dom';

class ProfileDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div id="profile-toggle-button">Profile</div>
                <ul className="profile-dropdown">
                    <li><Link to="/">Saved homes</Link></li>
                    <li><Link to="/">Your home</Link></li>
                    <li><Link to="/">Account settings</Link></li>
                    <li><Link to="/">Sign out</Link></li>
                </ul>
            </div>

            
        )
    }
}

export default ProfileDropdown;