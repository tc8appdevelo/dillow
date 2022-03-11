import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SearchBar from '../search_bar/search_bar';
import SearchBarContainer from '../search_bar/search_bar_container';
import BuyRentSellContainer from '../buttons/buy_rent_sell_container';
import { Link } from "react-router-dom";
import GeocodeListingContainer from '../map/geocode_listing_container';
import HomeMapContainer from '../map/home_map_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;

    }





    render() {
        return (
            <div className="splash--wrap">
                <NavBarContainer />
                <SearchBarContainer />
                {/* <HomeMapContainer /> */}
                <BuyRentSellContainer />
                <div className='links-flex'>
                <div className='my-link-box'>
                        <a className='my-link' href="https://www.linkedin.com/in/anthony-carroll-996697101/" target="_blank" rel="noopener">
                            Linkedin
                        </a>
                        
                    </div>
                    <div className='my-link-box'>
                        <a className='my-link' href="https://angel.co/u/anthony-carroll-5" target="_blank" rel="noopener">
                            Angel list
                        </a>
                    </div>
                    <div className='my-link-box'>
                        <a className='my-link' href="https://github.com/tc8appdevelo" target="_blank" rel="noopener">
                            Github
                        </a>
                    </div>
                </div>
                <GeocodeListingContainer />
            </div>
        )
    }
}

export default Splash;

