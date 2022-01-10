import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import SearchBar from '../search_bar/search_bar';
import BuyRentSellButton from '../buttons/buy_rent_sell'
import Modal from '../modals/modal'
import HomePage from '../listings/home_page';
import DillowMap from '../map/dillow_map';
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
                <BuyRentSellButton />
                <DillowMap />
            </div>
        )
    }
}

export default Splash;

