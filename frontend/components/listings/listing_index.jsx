import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page"
import DillowMap from "../map/dillow_map"
import DillowMapContainer from "../map/dillow_map_container"
import NavBarContainer from '../navbar/nav_bar_container';
import PriceDropdown from './price_dropdown';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentListing: null,
            searchTab: null,
        }

        this.showModal = this.showModal.bind(this);
        //this.exitModal = this.exitModal.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
        this.unSaveHouse = this.unSaveHouse.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings();
        if (this.props.currentUser) {
            this.props.fetchSavedListings();
        }
    }

    showModal(idx) {
        const listing = this.props.listings.find(x => x.id === idx);
        this.setState({
            currentListing: listing,
        })
    }

    saveHouse(id) {
        if (this.props.currentUser) {
            this.props.saveListing(id);
        }
        // let sl = this.props.fetchSavedListings();
        // this.setState(state => ({
        //     savedListings: sl
        // }))
    }
    unSaveHouse(id) {
        if (this.props.currentUser) {
            this.props.unSaveListing(id);
        }
        // let sl = this.props.fetchSavedListings();
        // this.setState(state => ({
        //     savedListings: sl
        // }))
    }




    exitModal() {
        this.setState({
            currentListing: null,
        })
    }

    handleSearchClick(tab) {
        let showTab;
        switch (tab) {
            case "price":
                if (this.state.searchTab === null) {
                    showTab = <PriceDropdown fetchListings={this.props.fetchListings}/>
                } else {
                    showTab = null;
                }
                break;
            default:
                showTab = null;
                break;
        }

        this.setState({
            searchTab: showTab,
        })

    }

    render() {
        let searchTab;
        if (this.state.searchTab) {
            searchTab = this.state.searchTab;
        } else {
            searchTab = <div></div>
        }
        // if (this.props.listings[0]) {

            const currentListing = this.state.currentListing;
            return (
                <div id="container-l">
                    <div id="fix-nav">
                        <NavBarContainer />
                    </div>
                    
                    <div className="map-bar">

                    </div>

                    <div id="listings">

                        
                        <div id="listings-nav">
                            <textarea  className="search-textarea"></textarea>
                            <div className="search-btn">For Sale</div>
                            <div className="search-btn" onClick={() => this.handleSearchClick("price")}>Price</div>
                            {searchTab}
                            <div className="search-btn--save">Save search</div>
                        </div>

                        <div id="listings-map-homes">

                            <DillowMapContainer />


                            <div id="homes-list-wrapper">
                                <div id="homes-wrap">
                                    {this.props.listings[0] ?
                                        this.props.listings.map(listing => (<ListingIndexItem key={listing.id} savedListings={this.props.savedListings} listing={listing} saveListing={this.saveHouse} unSaveListing={this.unSaveHouse} handleClick={this.showModal} />)) : ""}
                                </div>
                            </div>

                        </div>
                        <div>
                        </div>
                        <HomePage showListing={currentListing} exitModal={() => this.exitModal()} />

                    </div>
                </div>

            )
        // } else {
        //     return (
        //         <div></div>
        //     )
        // }
        
    }
}

export default ListingIndex;