import React from 'react';
import PriceDropdown from '../listings/price_dropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        }
        this.searchUpdateFilter = this.searchUpdateFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        let val = this.state.location
        this.searchUpdateFilter("location", val);
    }

    handleLocationChange(e) {
        let location = e.target.value;
        this.setState({
            location: location
        })
    }

    searchUpdateFilter(filter, value) {
        this.props.updateFilter(filter, value).then(this.props.history.push("/homes"));
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
                    {/* <div className='search-flex-wrap'>
                        <div className='search-txt-btn-flex'>
                            <PriceDropdown updateFilter={this.searchUpdateFilter} />
                        </div>
                        
                    </div> */}

                    <form onSubmit={this.handleSearch}>
                        <div className="places-search-flex">
                            <input
                                type="text"
                                placeholder='Enter a state, city, or ZIP code'
                                className="splash-search-textarea"
                                value={this.state.location}
                                onChange={this.handleLocationChange}>
                            </input>
                            <button
                                className="places-search-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;