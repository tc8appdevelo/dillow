import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';

class Page extends React.Component {
    constructor(props) {
        super(props);
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

export default Page;