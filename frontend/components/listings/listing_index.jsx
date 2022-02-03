import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page"
import DillowMap from "../map/dillow_map"
import DillowMapContainer from "../map/dillow_map_container"
import NavBarContainer from '../navbar/nav_bar_container';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentListing: null,
        }

        this.showModal = this.showModal.bind(this);
        //this.exitModal = this.exitModal.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
        this.unSaveHouse = this.unSaveHouse.bind(this);
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

    

    render() {

        if (this.props.listings[0]) {

            const currentListing = this.state.currentListing;
            return (
                <div>
                    <div id="fix-nav">
                        <NavBarContainer />
                    </div>
                    
                    <div className="map-bar">

                    </div>

                    <div id="listings">

                        
                        <div id="listings-nav">
                            <textarea  className="map-search"></textarea>
                            <div className="map-button">For sale</div>
                            <div className="map-button">Price</div>
                            <div className="save-search-button">Save search</div>
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
        } else {
            return (
                <div></div>
            )
        }
        
    }
}

export default ListingIndex;