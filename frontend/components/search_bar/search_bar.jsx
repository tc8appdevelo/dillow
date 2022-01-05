import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
 
    }

    render() {
        return(
            <div className="search-banner" >
                <div className="search-picture">
                    <textarea className="search-bar"></textarea>
                </div>
            </div>
        )
    }
}

export default SearchBar;