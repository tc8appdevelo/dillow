import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
 
    }

    render() {
        return(
            // <div className="search-banner" >
            //     <div className="search-picture">
            //         <textarea className="search-bar"></textarea>
            //     </div>
            // </div>

            <div className='banner-flex-wrap'>
                
                    <img className='banner-img' src={window.oceanCityBanner} alt='' />
                    
                    <textarea className='search-text-bar'></textarea>
                    
                
            </div>
        )
    }
}

export default SearchBar;