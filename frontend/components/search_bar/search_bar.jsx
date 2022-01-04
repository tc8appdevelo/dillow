import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-bar" >
                <img src={window.alpineURL} style={{visibility: 'hidden'}} />
                <textarea className="search-bar"></textarea>
            </div>
        )
    }
}

export default SearchBar;