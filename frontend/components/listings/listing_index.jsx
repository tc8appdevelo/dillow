import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page";
import DillMapContainer from "../map/dill_map_container";
import NavBarContainer from '../navbar/nav_bar_container';
import PriceDropdown from './price_dropdown';
import LocationDropdown from './location_dropdown';
import DillMap from '../map/dill_map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlassDollar,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'


class ListingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentListing: null,
            searchTab: null,
            currentlyShowing: null,
            zipTab: null,
            
            filter: {
                price_range: "none",
                zip_code: "",
                city: "",
                state: "",
                search: "",
            },
            newQuery: false,
            didMount: false,
        }

        this.showModal = this.showModal.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
        this.unSaveHouse = this.unSaveHouse.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        // this.updatePriceFilter = this.updatePriceFilter.bind(this);
        this.handleZipcode = this.handleZipcode.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.formatRangeTxt = this.formatRangeTxt.bind(this);
        // this.handleCityStateZip = this.handleCityStateZip.bind(this);
        this.placesSearch = this.placesSearch.bind(this);
        this.queryCompleted = this.queryCompleted.bind(this);
    }

    componentDidMount() {

        //this.props.fetchListings(this.props.filters);
        if (this.props.currentUser) {
            this.props.fetchSavedListings();
        }

        this.setState({
            filter: this.props.filters,
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



    // updatePriceFilter(filter) {
    //     let newFilter = {...this.state.filter}
    //     newFilter["price_range"] = filter.price_range;
    //     this.setState({
    //         filter: newFilter,
    //     })
    // }

    handleZipcode(e) {
        let newFilter = {...this.state.filter}
        newFilter["city_state_zip"] = e.target.value;
        this.setState({
            filter: newFilter,
        })
    }

    // handleZipCode(e) {
    //     this.setState({
    //         city_state_zip: e.target.value
    //     })
    //     console.log(this.state)
    // }

    handleClearSearch() {
        this.props.clearFilter();
    }


    handleTabClick(tab) {
        let filter = this.state.filter;
        let showTab;
        let tabName;
        
        switch (tab) {
            case "price":
                if (this.state.searchTab === null) {
                    showTab = <PriceDropdown updateFilter={this.props.updateFilter} priceFilter={this.props.filters} exitModal={this.handleTabClick} buttonColor="blue" />
                    tabName = "price"
                } else {
                    showTab = null;
                    tabName = null;
                }
                break;
            case "zip":
                if (this.state.searchTab === null) {
                    showTab = <LocationDropdown currentDropdown="zip_code" updateFilter={this.props.updateFilter} locationFilter={this.props.filters} exitModal={this.handleTabClick} buttonColor="blue" />
                    tabName = "zip"
                } else {
                    showTab = null;
                    tabName = null;
                }
                break;
            case "state":
                if (this.state.searchTab === null) {
                    showTab = <LocationDropdown currentDropdown="state" updateFilter={this.props.updateFilter} locationFilter={this.props.filters} exitModal={this.handleTabClick} buttonColor="blue" />
                    tabName = "state"
                } else {
                    showTab = null;
                    tabName = null;
                }
                break;
            case "city":
                if (this.state.searchTab === null) {
                    showTab = <LocationDropdown currentDropdown="city" updateFilter={this.props.updateFilter} locationFilter={this.props.filters} exitModal={this.handleTabClick} buttonColor="blue" />
                    tabName = "city"
                } else {
                    showTab = null;
                    tabName = null;
                }
                break;
            default:
                showTab = null;
                tabName = null;
                break;
        }

        this.setState({
            searchTab: showTab,
            currentlyShowing: tabName,
        })

    }



    formatRangeTxt() {
        let min = this.props.filters['price_range']['min'];
        let max = this.props.filters['price_range']['max'];
        console.log(min);
        console.log(max);
        let minShort;
        let maxShort;

        if (min < 1000000) {
            minShort = Math.floor(min/1000).toString() + "k";
        } else {
            minShort = (min/1000000).toString() + "m";
        }

        if (max < 1000000) {
            maxShort = Math.floor(max/1000).toString() + "k";
        } else {
            maxShort = (max/1000000).toString() + "m"
        }
        
        if ((min === '' || min === 0 || min === "none") && (max > 0)) {
            return "up to " + maxShort;
        } else if ((max === "none" || max === '' || max === 0) && (min > 0)) {
            return minShort + "+"
        } else if ((min === '' || min === 0 || "none" || min === "any") && (max === '' || max === 0 || max === "none" || max === "any")){
            return "Price"
        }

        return minShort + "-" + maxShort;
    }

    placesSearch(e) {
        e.preventDefault();
        this.setState({
            newQuery: true
        })
    }

    queryCompleted() {
        this.setState({
            newQuery: false
        })
    }



    render() {
        let searchTab;
        let tabName;
        let cityStateZip;
        let newQuery;

        if (this.state.newQuery) {
            newQuery = this.state.filter.city_state_zip;
        } else {
            newQuery = false;
        }

        if (this.state.filter.city_state_zip) {
            cityStateZip = this.state.filter.city_state_zip;
        } else {
            cityStateZip = "none"
        }

        if (this.state.searchTab) {
            searchTab = this.state.searchTab;
        } else {
            searchTab = <div></div>
        }

        if (this.state.currentlyShowing) {
            tabName = this.state.currentlyShowing;
        } else {
            tabName = null;
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
            let rangeTxt;
            if (this.props.filters.price_range['min'] === 'none') {
                rangeTxt = "Price";
            } else {
                // rangeTxt = this.props.filters.price_range['min'];
                rangeTxt = this.formatRangeTxt();
            }

            let zipText;
            if (this.props.filters.zip_code === 'none') {
                zipText = "ZIP code"
            } else {
                zipText = this.props.filters.zip_code;
            }

            let cityText;
            if (this.props.filters.city === "none") {
                cityText = "City"
            } else {
                cityText = this.props.filters.city;
            }

            let stateText;
            if (this.props.filters.state === "none") {
                stateText = "State";
            } else {
                stateText = this.props.filters.state;
            }

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
                            <form onSubmit={this.placesSearch}>
                            <div className="places-search-flex">
                                <input
                                    type="text"
                                    placeholder='Enter a state, city, or ZIP code'
                                    className="search-textarea"
                                    value={this.state.city_state_zip}
                                    onChange={this.handleZipcode}>
                                </input>
                                <button
                                    className="places-search-btn">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                                
                            </div>
                            </form>



                            <div className='price-search'>
                                <div className="search-btn" onClick={() => this.handleTabClick("city")}>{cityText}</div>
                                {tabName === "city" ? searchTab : <div></div> }
                            </div>

                            <div className='price-search'>
                                <div className="search-btn" onClick={() => this.handleTabClick("state")}>{stateText}</div>
                                {tabName === "state" ? searchTab : <div></div> }
                            </div>

                            <div className='price-search'>
                                <div className="search-btn" onClick={() => this.handleTabClick("zip")}>{zipText}</div>
                                {tabName === "zip" ? searchTab : <div></div> }
                            </div>
                            
                            <div className='price-search'>
                                <div className="search-btn" onClick={() => this.handleTabClick("price")}>{rangeTxt}</div>
                                {tabName === "price" ? searchTab : <div></div> }
                            </div>

                            <div className="search-btn--save" onClick={this.handleClearSearch}>Clear Search</div>
                        </div>

                        <div id="listings-map-homes">

                        {homePage ? 
                                <DillMap single="single" updateFilter={this.props.updateFilter} listings={this.props.listings} singleListing={currentListing} />
                                : <DillMap newQuery={newQuery} queryCompleted={this.queryCompleted} updateFilter={this.props.updateFilter} listings={this.props.listings} handleMarkerClick={this.showModal} />}

                            {/* {homePage ? 
                                <DillMapContainer single="single" singleListing={currentListing} />
                                : <DillMapContainer handleMarkerClick={this.showModal} /> */}
                            

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