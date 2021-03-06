import React from 'react';
import ProfileButton from './profile_button';

import {Link} from 'react-router-dom';

class LoggedInBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">
                <ProfileButton />
                <Link to="/login" onClick={this.props.logout}>Logout</Link>
            </div>
        )
    }
}

export default LoggedInBar;