import React from "react";
import { Link } from "react-router-dom";

class BuyRentSellButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="container-all--col">
                <div className="container-rectangle--col">
                    <div className="title--medium">Title and slogan,</div>
                    <div className="title--medium">for these buttons:</div>
                </div>
                    <div id="buy-rent-sell">

                        <div className="big-box">
                            <Link className="big-box" to="/homes">Buy</Link>
                        </div>
                        <Link className="big-box" to="/sell">Sell</Link>
                        <div className="big-box">Rent</div>
                    </div>

            </div>



        )
    }
}

export default BuyRentSellButton;