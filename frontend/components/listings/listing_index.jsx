import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page";
import NavBarContainer from '../navbar/nav_bar_container';
import PriceDropdown from './price_dropdown';
import BedsBathDropdown from './beds_bath_dropdown';
import HometypeDropdown from './hometype_dropdown';
import LocationDropdown from './location_dropdown';
import DillMap from '../map/dill_map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
        let location;
        let newQuery;
        if (props.filters.location != "none") {
            location = props.filters.location;
            newQuery = true;
        } else {
            location = "";
            newQuery = false;
        }
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
            newQuery: newQuery,
            didMount: false,
        }

        this.showModal = this.showModal.bind(this);
        this.saveHouse = this.saveHouse.bind(this);
        this.unSaveHouse = this.unSaveHouse.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleZipcode = this.handleZipcode.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.formatRangeTxt = this.formatRangeTxt.bind(this);
        this.formatBedroomsTxt = this.formatBedroomsTxt.bind(this);
        this.placesSearch = this.placesSearch.bind(this);
        this.queryCompleted = this.queryCompleted.bind(this);
    }

    componentDidMount() {
        // if (this.props.listings.length < 1) {
        //     this.props.fetchListings(this.props.filters)
        // }

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

    handleZipcode(e) {
        let newFilter = {...this.state.filter}
        newFilter["city_state_zip"] = e.target.value;
        this.setState({
            filter: newFilter,
        })
    }

    handleClearSearch() {
        const defaultFilters = {
            bounds: this.props.filters.bounds,
            price_range: {
                min: "none",
                max: "none"
            },
            city: "none",
            state: "none",
            zip_code: "none",
            beds_baths: {
                bedrooms: "none",
                bathrooms: "none",
            },
            home_types: {
                house: true,
                town_home: true,
                multi_family: true,
                condo: true,
                land: true,
                apartment: true,
                manufactured: true
            },
            location: "none",
        }

        console.log(defaultFilters)
        this.props.clearFilter(defaultFilters);
    }


    handleTabClick(tab) {
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
            case "bedrooms":
                if (this.state.searchTab === null) {
                    showTab = <BedsBathDropdown updateFilter={this.props.updateFilter} bedsBathFilter={this.props.filters} exitModal={this.handleTabClick} />
                    tabName = "bedrooms" 
                } else {
                    showTab = null;
                    tabName = null;
                }
                break;
            case "hometype":
                if (this.state.searchTab === null) {
                    showTab = <HometypeDropdown updateFilter={this.props.updateFilter} homeTypesFilter={this.props.filters.home_types} exitModal={this.handleTabClick} />
                    tabName = "hometype"
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

    formatBedroomsTxt() {
        let bedrooms = this.props.filters["beds_baths"]["bedrooms"];
        let bathrooms = this.props.filters["beds_baths"]["bathrooms"];
        let bedTxt;
        let bathTxt;

        if (bedrooms.toLowerCase() != "none" && bedrooms.toLowerCase() != "any") {
            bedTxt = bedrooms + "+ bd, ";
        } else {
            bedTxt = "Beds & "
        }

        if (bathrooms.toLowerCase() != "none" && bathrooms.toLowerCase() != "any") {
            bathTxt = bathrooms + "+ ba";
        } else {
            bathTxt = "Baths"
        }

        if (bedTxt === "Beds & " && bathTxt != "Baths") {
            bedTxt = "0+ bd, ";
        }
        if (bathTxt === "Baths" && bedTxt != "Beds & ") {
            bathTxt = "0+ ba"
        }

        return bedTxt + bathTxt;
    }

    placesSearch(e) {
        e.preventDefault();
        this.setState({
            newQuery: true
        })
    }

    queryCompleted() {
        this.setState({
            newQuery: false,
            initialQuery: false,
        })
    }



    render() {
        let searchTab;
        let tabName;
        let newQuery;

        if (this.state.newQuery) {
            newQuery = this.state.filter.city_state_zip;
        } else {
            newQuery = false;
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
        
        if (didMount) {
            let rangeTxt;
            if (this.props.filters.price_range['min'] === 'none') {
                rangeTxt = "Price";
            } else {
                rangeTxt = this.formatRangeTxt();
            }

            let bedroomsTxt;
            if (this.props.filters.bedrooms === 'none') {
                bedroomsTxt = "Beds & Baths"
            } else {
                bedroomsTxt = this.formatBedroomsTxt();
            }

            let hometypeTxt;
            if (this.props.filters.home_types === 'none') {
                hometypeTxt = "Home type";
            } else {
                hometypeTxt = "Home type"
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
                                <div className="search-btn" onClick={() => this.handleTabClick("price")}>{rangeTxt}</div>
                                {tabName === "price" ? searchTab : <div></div> }
                            </div>

                            <div className='price-search'>
                                <div className='search-btn' onClick={() => this.handleTabClick("bedrooms")}>{bedroomsTxt}</div>
                                { tabName === "bedrooms" ? searchTab : <div></div> }
                            </div>

                            <div className='price-search'>
                                <div className='search-btn' onClick={() => this.handleTabClick("hometype")}>{hometypeTxt}</div>
                                { tabName === "hometype" ? searchTab : <div></div> }
                            </div>

                            <div className="search-btn--save" onClick={this.handleClearSearch}>Clear Search</div>
                        </div>
                        <div id="listings-map-homes">
                        {homePage ? 
                                <DillMap single="single" updateFilter={this.props.updateFilter} listings={this.props.listings} singleListing={currentListing} />
                                : <DillMap newQuery={newQuery} queryCompleted={this.queryCompleted} filters={this.props.filters} updateFilter={this.props.updateFilter} listings={this.props.listings} handleMarkerClick={this.showModal} />}
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