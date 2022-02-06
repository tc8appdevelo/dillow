import React from "react"


class CurrentlySellingItem extends React.Component {


  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  testOutThis() {
    console.log("need to make edit listing");
  }

  componentDidMount() {
    
  }

  handleClick(e) {
    let className = e.target.className;
    switch (className) {
      case "pencil-img":
        this.props.handleClick("edit", this.props.listing)
        break;
      case "trash-img":
        this.props.deleteListing(this.props.listing);
        break;
      default:
        console.log("other thing whole");
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
    let priceStr;
    if (listing.price) {
      priceStr = this.formatPrice(listing.price);
    }


    return (
      <div className="pos-heart-wrap">

        <div className="save--l-wrap" onClick={this.handleClick}>
          <div className="save--listing-box" style={{ backgroundImage: `url(${listing.largePhotoUrl})` }}>
            <div className='trash-pencil-flex'>
              <div className="pencil-button">
                <img className="pencil-img" src={window.editPencilUrl} alt="" />
              </div>
              <div className="trash-button">
                <img className="trash-img" src={window.trashUrl} alt="" />
              </div>
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

export default CurrentlySellingItem;