import React from 'react';
import { fetchListings } from '../../actions/listing_actions';
import ListingsContainer from './listings_container'

class Listings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchListings();
    }

    render() {
        debugger
        return (
            <div id="listings">Listings
            
                <div id="listings-top">dillow</div>
                <div id="listings-nav">nav</div>
                <div id="listings-map-homes">
                    <div id="map">
                        Hello World!
                    </div>
                    <div id="homes-list">
                        {this.props.listings[0] ? this.props.listings[0].city : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default Listings;