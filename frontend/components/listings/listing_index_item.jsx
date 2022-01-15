import React from "react"


class ListingIndexItem extends React.Component {

 
    constructor(props) {
        super(props);
        
    }

    
    formatPrice(price) {
        let arr = price.toString().split("").reverse();
        let priceStr = [];

        for (let i = 0; i < arr.length; i++) {
            if (i % 3 === 0 && i > 0) {
                priceStr.unshift(",");
            }

            priceStr.unshift(arr[i]);
        }

        return "$" + priceStr.join("");
    }
 


    render() {

        const listing = this.props.listing

        let priceStr;
        if (listing.price) {
            priceStr = this.formatPrice(listing.price);
        }

        return (
        
            <div className="l-wrap" onClick={() => this.props.handleClick(listing.id)}>
                <div className="listing-box" style={{ backgroundImage: `url(${listing.photoUrl})` }}>
                    

                </div>
                <div className="listing-box--bottom-bar">

                    <div className="price-text">{listing.price ? priceStr : "$500,232"}</div>
                    <div className="small-txt">
                        {`${listing.bedrooms} bds ${listing.bathrooms} bath ${listing.lot_size} sqft - ${listing.property_type} for sale`}
                    </div>
                    <div className="small-txt">
                        {`${listing.address}, ${listing.city} ${listing.state} ${listing.zip_code}`}
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default ListingIndexItem;