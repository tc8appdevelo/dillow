import React from 'react';




class RentDropdown extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
            <div id="rentdropdown">
                <div className="homes-flex">
                    <ul className="buy-dropdown">
                        <div className="blk">Search for rentals</div>
                        <div>Rental buildings</div>
                        <div>Apartments for rent</div>
                        <div>Houses for rent</div>
                        <div>All rental listings</div>
                        <div>All rental buildings</div>
                    </ul>
                    <div className="buy-dropdown">
                        <div className="blk">Renting</div>
                        <div>Favorites</div>
                        <div>Contacted Rentals</div>
                        <div>Your rental</div>
                        <div>Messages</div>
                    </div>
                </div>
                <div className="mid-flex">
                    <div className="buy-dropdown">
                        <div className="blk">Resources</div>
                        <div>Affordability calculator</div>
                        <div>Renters guide</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="last-flex">
                    <div className="buy-dropdown">
                        <div className="blk">Resources</div>
                        <div>Buyers Guide</div>
                        <div>Forclosure center</div>
                        <div>Real estate app</div>
                        <div></div>
                    </div>
                </div>
            </div>



        )
    }
}

export default RentDropdown;