import React from 'react';
import ProfileButton from './profile_button';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    // componentDidMount() {
    //     debugger
    // }

    handleLogout() {
        this.props.logout();
    }

    render () {
        return (
            <div>
                <button onClick={this.handleLogout}>logout</button>
                
                <ProfileButton />        
            </div>

        )
    }
}

export default NavBar;