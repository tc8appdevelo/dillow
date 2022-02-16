import React from 'react';
import PriceDropdown from '../listings/price_dropdown';
import { Link } from 'react-router-dom';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchUpdateFilter = this.searchUpdateFilter.bind(this);
    }

    handleSearch() {
        
    }

    searchUpdateFilter(filter, value) {
        this.props.updateFilter(filter, value);
        this.props.history.push("/homes");
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
                <div className='search-abs-pos'>
                    <div className='search-flex-wrap'>
                        <div className='search-title'>Enter a price range</div>
                        <div className='search-txt-btn-flex'>
                            {/* <textarea className='search-text-bar'></textarea>
                            <div className='btn-search'>Search</div> */}
                            <PriceDropdown updateFilter={this.searchUpdateFilter} />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;