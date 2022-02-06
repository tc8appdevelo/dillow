import React from "react"


class ListingIndexItem extends React.Component {


    constructor(props) {
        super(props);
        this.isListingSaved = this.isListingSaved.bind(this);
        this.toggleSaved = this.toggleSaved.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    toggleSaved() {
        let isSaved = this.isListingSaved();
        if (!isSaved) {
            this.props.saveListing(this.props.listing.id);
        } else {
            this.props.unSaveListing(this.props.listing.id);
        }
    }

    isListingSaved() {
        let saved = this.props.savedListings.find(l => l.id === this.props.listing.id);
        if (typeof saved === 'object') {
            return true;
        } else {
            return false;
        }
    }

    handleClick(e) {
        let className = e.target.className;
        switch (className) {
            case "heart-img":
                this.toggleSaved();
                break;
            default:
                this.props.handleClick(this.props.listing.id);
                break;
        }
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
        const listing = this.props.listing;
        let saved = this.isListingSaved();
        let priceStr;
        if (listing.price) {
            priceStr = this.formatPrice(listing.price);
        }
        return (
            <div className="pos-heart-wrap">

                <div className="l-wrap" onClick={this.handleClick}>
                    
                    <div className="listing-box" style={{ backgroundImage: `url(${listing.largePhotoUrl})` }}>
                        {saved ?
                            <div className="saved-heart">
                                <img className="heart-img" src={window.savedHeartUrl} alt="" />
                            </div> :
                            <div className="not-saved-heart">
                                <img className="heart-img"  src={window.notSavedHeartUrl} alt="" />
                            </div>}
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

            </div>

        )
    }

}

export default ListingIndexItem;