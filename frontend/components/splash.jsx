import React from 'react';
import TestNavContainer from './oldbar/test_nav_container';

import SearchBar from './search_bar/search_bar';
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
    }

    render() {
        return (
            <div>
                <TestNavContainer />
                <SearchBar />
            </div>
        )
    }
}

export default Splash;