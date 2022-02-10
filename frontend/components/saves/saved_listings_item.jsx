import React from "react"
import { formatPrice } from "../../utils/format_price";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHouse, faCalendarDays,
        faRulerCombined, faTemperatureFull, faTemperatureEmpty,
        faSquareParking } from '@fortawesome/free-solid-svg-icons'

class SavedListingsItem extends React.Component {

  constructor(props) {
    super(props);


    //this.formatPrice = this.formatPrice.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let className = e.target.className;
    let listing = this.props.listing;
    switch (className) {
      case "heart-img":
        this.props.unSaveListing(listing.id);
        break;
      default:
        this.props.handleClick(listing.id);
        break;
    }
  }



  render() {
    
    const listing = this.props.listing;
    let priceStr;
    if (listing.price) {
      priceStr = formatPrice(listing.price);
    }

    return (
      <div className="save--back-box" onClick={this.handleClick}>
        <div className="save--l-wrap">
          <div className="save--listing-box" style={{ backgroundImage: `url(${listing.largePhotoUrl})` }}>
              <div className="saved-heart">
                <img className="heart-img" src={window.savedHeartUrl} alt="" />
              </div>
          </div>
          <div className="save--listing-box--bottom-bar">


              <div className="save--price-text">{listing.price ? priceStr : ""}</div>
              <div className="save--small-txt">
                {`${listing.bedrooms} bds ${listing.bathrooms} bath ${listing.lot_size} sqft - ${listing.property_type} for sale`}
              </div>
              <div className="save--small-txt">
                {`${listing.address}, ${listing.city} ${listing.state} ${listing.zip_code}`}
              </div>


          </div>
        </div>
        <div className="info-icons-wrap">
          <div className="info-icon">
            <FontAwesomeIcon icon={faHouse} />
            <div className="info-text-flex">
              <div className="info-title">Type</div>
              <div className="info-text">
                {listing.property_type}
              </div>
            </div>

          </div>
          <div className="info-icon">
            <FontAwesomeIcon icon={faCalendarDays} />
            <div className="info-text-flex">
              <div className="info-title">Year built</div>
              <div className="info-text">
                {listing.year_built}
              </div>
            </div>

          </div>
          <div className="info-icon">
            <FontAwesomeIcon icon={faTemperatureFull} />
            <div className="info-text-flex">
              <div className="info-title">Heating</div>
              <div className="info-text">
                {listing.heating}
              </div>
            </div>

          </div>

          <div className="info-icon">
            <FontAwesomeIcon icon={faTemperatureEmpty} />    
            <div className="info-text-flex">
              <div className="info-title">Cooling</div>
              <div className="info-text">
                {listing.cooling}
              </div>
            </div>
            </div>
            <div className="info-icon">
              <FontAwesomeIcon icon={faSquareParking} />
              <div className="info-text-flex">
                <div className="info-title">Parking</div>
                <div className="info-text">
                  {listing.parking}
                </div>
              </div>
              </div>
              <div className="info-icon">
            <FontAwesomeIcon icon={faRulerCombined} />
                <div className="info-text-flex">
                  <div className="info-title">Lot</div>
                  <div className="info-text">
                    {listing.lot_size} sqft
                  </div>
                </div>
          </div>

        </div>
      </div>
    )
  }

}

export default SavedListingsItem;