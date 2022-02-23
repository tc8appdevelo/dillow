import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page";
import DillMapContainer from "../map/dill_map_container";
import NavBarContainer from '../navbar/nav_bar_container';
import PriceDropdown from './price_dropdown';


class ListingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentListing: null,
            searchTab: null,
            filter: {
                price_range: "none",
                zip_code: "",
                city: "",
                state: "",
                search: "",
            },
            didMount: false,
        }

        this.showModal = this.showModal.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
        this.unSaveHouse = this.unSaveHouse.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.updatePriceFilter = this.updatePriceFilter.bind(this);
        this.handleZipcode = this.handleZipcode.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {

        this.props.fetchListings(this.props.filters);
        if (this.props.currentUser) {
            this.props.fetchSavedListings();
        }

        this.setState({
            didMount: true,
        })

    }
    exitModal() {
        this.setState({
            currentListing: null,
        })
    }
    showModal(idx) {
        let listing = this.props.listings.find(x => x.id === idx);
        this.setState({
            currentListing: listing,
        })
    }
    saveHouse(id) {
        if (this.props.currentUser) {
            this.props.saveListing(id);
        }
    }
    unSaveHouse(id) {
        if (this.props.currentUser) {
            this.props.unSaveListing(id);
        }
    }



    updatePriceFilter(filter) {
        let newFilter = {...this.state.filter}
        newFilter["price_range"] = filter.price_range;
        this.setState({
            filter: newFilter,
        })
    }

    handleZipcode(e) {
        let newFilter = {...this.state.filter}
        newFilter["zip_code"] = e.target.value;
        this.setState({
            filter: newFilter,
        })
    }

    handleSearch(filter) {

        this.props.fetchListings({filter: this.state.filter});
    }


    handleTabClick(tab) {
        let showTab;
        switch (tab) {
            case "price":
                if (this.state.searchTab === null) {
                    showTab = <PriceDropdown updateFilter={this.props.updateFilter} buttonColor="blue" />
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
        let filter = this.state.filter;
        if (this.state.searchTab) {
            searchTab = this.state.searchTab;
        } else {
            searchTab = <div></div>
        }
        let homePage;
        if (this.state.currentListing) {
            homePage = true;
        } else {
            homePage = false;
        }

        let didMount = this.state.didMount;
        
        // if (this.props.listings[0]) {
        if (didMount) {
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
                            <input
                                type="text"
                                placeholder='Enter a state, city, or ZIP code'
                                className="search-textarea"
                                value={this.state.filter.zip_code}
                                onChange={this.handleZipcode}>
                            </input>
                            <div className="search-btn">zip code</div>
                            <div className="search-btn" onClick={() => this.handleTabClick("price")}>Price</div>
                            {searchTab}
                            <div className="search-btn--save" onClick={this.handleSearch} >Search</div>
                        </div>

                        <div id="listings-map-homes">

                            {homePage ? 
                                <DillMapContainer single="single" singleListing={currentListing} />
                                : <DillMapContainer handleMarkerClick={this.showModal} />
                            }

                            <div id="homes-list-wrapper">
                                <div id="homes-wrap">
                                    {this.props.listings[0] ?
                                        this.props.listings.map(listing => (<ListingIndexItem key={listing.id} savedListings={this.props.savedListings} listing={listing} saveListing={this.saveHouse} unSaveListing={this.unSaveHouse} handleClick={this.showModal} />)) : ""}
                                </div>
                            </div>

                        </div>
                        <div>
                        </div>
                        {homePage ? <HomePage listing={currentListing} saveListing={this.saveHouse} unSaveListing={this.unSaveHouse} savedListings={this.props.savedListings} exitModal={() => this.exitModal()} /> : <div></div> }
                        {/* <HomePage listing={currentListing} saveListing={this.saveHouse} unSaveListing={this.unSaveHouse} exitModal={() => this.exitModal()} /> */}
                        
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