import React from "react"

class SavedListingsItem extends React.Component {

  constructor(props) {
    super(props);


    this.formatPrice = this.formatPrice.bind(this);
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
    let priceStr;
    if (listing.price) {
      priceStr = this.formatPrice(listing.price);

    }

    return (
      <div className="pos-heart-wrap">
        <div className="save--l-wrap">
          <div className="save--listing-box" style={{ backgroundImage: `url(${listing.largePhotoUrl})` }}>
              <div className="saved-heart" onClick={() => this.props.unSaveListing(listing.id)}>
                <img className="heart-img" src={window.savedHeartUrl} alt="" />
              </div>
          </div>
          <div className="save--listing-box--bottom-bar">

            <div className="save--price-text">{listing.price ? priceStr : "$500,232"}</div>
            <div className="save--small-txt">
              {`${listing.bedrooms} bds ${listing.bathrooms} bath ${listing.lot_size} sqft - ${listing.property_type} for sale`}
            </div>
            <div className="save--small-txt">
              {`${listing.address}, ${listing.city} ${listing.state} ${listing.zip_code}`}
            </div>

          </div>
        </div>

      </div>

    )
  }

}

export default SavedListingsItem;