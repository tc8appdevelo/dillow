import React from 'react';

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
                    <div id="listings-homes">
                        Homes
                    </div>
                </div>
            </div>
        )
    }
}

export default Listings;