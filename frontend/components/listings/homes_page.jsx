import React from 'react';
import HomesList from './homes_list';

class Listings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="listings">Listings
                <div id="listings-top">dillow</div>
                <div id="listings-nav">nav</div>
                <div id="listings-map-homes">
                    <div id="map">
                         Map
                    </div>
                    <HomesList />
                </div>
            </div>
        )
    }
}

export default Listings;