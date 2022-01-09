import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchListings();
        
    }

    render() {
        
        return (
            <div id="listings">Listings

                <div id="listings-top">dillow</div>
                <div id="listings-nav">nav</div>
                <div id="listings-map-homes">
                    <div id="map">
                        Hello World!
                    </div>
                    <div id="homes-list-wrapper">
                        <div id="homes-wrap">
                                {this.props.listings[0] ?
                                    this.props.listings.map(listing => (<ListingIndexItem listing={listing} />)) : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingIndex;