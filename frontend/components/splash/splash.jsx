import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SearchBar from '../search_bar/search_bar';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <SearchBar />
            </div>
        )
    }
}

export default Splash;