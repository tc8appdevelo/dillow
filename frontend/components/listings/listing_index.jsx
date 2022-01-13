import React from 'react';
import ListingIndexItem from "./listing_index_item";
import HomePage from "./home_page"
import DillowMap from "../map/dillow_map"
class ListingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentListing: null,
        }

        this.showModal = this.showModal.bind(this);
        //this.exitModal = this.exitModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings();
        console.log(this.props.listings);
        this.props.saveListing(11)
    }

    showModal(idx) {
        //const listing = this.props.listings[idx]
        const listing = idx;

        this.setState({
            currentListing: listing,
        })

        this.props.saveListing(idx)
    }

    saveHouse(idx) {
        this.props.saveListing(idx)
    }



    exitModal() {
        this.setState({
            currentListing: null,
        })
    }

    

    render() {
        // const currentListing = this.state.currentListing;
     
        return (

            <div id="listings">Listings

                <div id="listings-top">dillow</div>
                <div id="listings-nav">nav</div>
                <div id="listings-map-homes">

                    <DillowMap  />

                    <div id="homes-list-wrapper">
                        <div id="homes-wrap">
                            {this.props.listings[0] ?
                                this.props.listings.map(listing => (<ListingIndexItem key={listing.id} listing={listing} saveListing = {this.props.saveListing}  handleClick={this.showModal} />)) : ""}
                        </div>
                    </div>

                </div>
                <div>
                </div>                    
                {/* <HomePage showListing={currentListing} exitModal={() => this.exitModal()}/> */}

            </div>
        )
    }
}

export default ListingIndex;