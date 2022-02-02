import React from "react"


class SavedListingsItem extends React.Component {


  constructor(props) {
    super(props);
    this.toggleSaved = this.toggleSaved.bind(this);
  }

  componentDidMount() {

  }

  toggleSaved() {
    this.props.unSaveListing(this.props.listing.id);
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
    let saved = true;
    const listing = this.props.listing;
    let priceStr;
    if (listing.price) {
      priceStr = this.formatPrice(listing.price);
    }


    return (
      <div className="pos-heart-wrap">
        {saved ?
          <div className="saved-heart">
            <img className="h-img" onClick={this.toggleSaved} src={window.savedHeartUrl} alt="" />
          </div> :
          <div className="not-saved-heart">
            <img className="h-img" onClick={this.toggleSaved} src={window.notSavedHeartUrl} alt="" />
          </div>}
        <div className="save--l-wrap" onClick={() => this.props.handleClick(listing.id)}>
          <div className="save--listing-box" style={{ backgroundImage: `url(${listing.photoUrl})` }}>

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