import React from 'react';
import ProfileButton from './profile_button';
import CreateLoginBox from './create_login_box';

class LoggedOutBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="nav-bar">
                <CreateLoginBox />
            </div>
        )
    }
}

export default LoggedOutBar;