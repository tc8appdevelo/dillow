import React from 'react';
import IndexItem from "./index_item"

class ScrollIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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
           
                            <IndexItem />

                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollIndex;