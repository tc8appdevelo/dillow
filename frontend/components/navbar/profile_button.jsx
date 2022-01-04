import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className="profile-button">
                <Link to={'/profile'}>Profile</Link>
            </div>
        )
    }
}

export default ProfileButton;