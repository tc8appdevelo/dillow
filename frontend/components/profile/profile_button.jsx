import React from 'react';
import { Link } from 'react-router-dom';

class ProfileButton extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        
        return (
            <div className="profile-button">
                <Link to="/login" onClick={this.props.logout}>Logout</Link>
                <Link className="profile-link" to={'/profile'}>Profile</Link>
            </div>
        )
    }
}

export default ProfileButton;