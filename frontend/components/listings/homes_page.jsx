import React from 'react';
import ListingsContainer from './listings_container'

class HomesPage extends React.Component {
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
                    <ListingsContainer />
                </div>
            </div>
        )
    }
}

export default HomesPage;