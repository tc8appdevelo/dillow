import React from 'react';




class BuyDropdown extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="buydropdown">
                <div className="homes-flex">
                    <ul className="buy-dropdown">
                        <div className="blk">Homes for sale</div>
                        <div>Homes for sale</div>
                        <div>Foreclosures</div>
                        <div>For sale by owner</div>
                        <div>Open houses</div>
                    </ul>
                    <div className="buy-dropdown">
                        <div>  </div>
                        <div>New construction</div>
                        <div>Coming soon</div>
                        <div>Recent home sales</div>
                        <div>All homes</div>
                    </div>
                </div>
             <div className="mid-flex">
                <div className="buy-dropdown">
                    <div className="blk">Bundle buying & selling</div>
                    <div>Buy and sell with dillo 900</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="last-flex">
                <div className="buy-dropdown">
                    <div id="blk">Resources</div>
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

export default BuyDropdown;