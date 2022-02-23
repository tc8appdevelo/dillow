import React from "react";

import DillMapContainer from "../map/dill_map_container"
import { formatPrice } from "../../utils/format_price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart as faSolidHeart
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as faEmptyHeart
} from '@fortawesome/free-regular-svg-icons'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSaved = this.toggleSaved.bind(this);
    this.isListingSaved = this.isListingSaved.bind(this);
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
    if (this.props.savedListings && this.props.savedListings[0]) {
      let saved = this.props.savedListings.find(l => l.id === this.props.listing.id);
      if (typeof saved === 'object') {
        return true;
      } else {
        return false;
      }
    } else if (this.props.fromSaved) {
      return true;
    }
  }
  componentDidMount() {
    
  }

  render() {
    if (this.props.listing === null) {
      return (
        <div></div>
      )
    } else {
      const saved = this.isListingSaved();
      const priceStr = formatPrice(this.props.listing.price);
      const lotSizeStr = formatPrice(this.props.listing.lot_size).slice(1);
      return (

        <div id="dd">

          <div className="flexbox-container-container">
            <div className="pictures">

              <img className="large-picture" src={this.props.listing.largePhotoUrl} alt="" />
              <div className="small-pictures-wrap">
                {this.props.listing.smallPhotoUrls.map((photoUrl, idx) => <img className="small-picture" key={idx} src={photoUrl} alt="" />)}
              </div>
            </div>
            <div className="home-info">
              <div className="home-info-top-bar">
                <div className="title-text">Dillow</div>
                <div className="right-info-top-bar">
                  <div>
                    {
                      saved ?
                        <div className="text-heart-row" onClick={() => this.props.unSaveListing(this.props.listing.id)}>
                          <FontAwesomeIcon className="home-heart" icon={faSolidHeart} />
                          <div className="save-home-page">Saved</div>
                        </div> :

                        <div className="text-heart-row" onClick={() => this.props.saveListing(this.props.listing.id)}>
                          <FontAwesomeIcon className="home-heart" icon={faEmptyHeart} />
                          <div className="save-home-page">Save</div>
                        </div>
                    }

                  </div>

                </div>
              </div>
              <div className="info-price-box">
                <div className="price-row">
                  <div className="price">{priceStr}</div>
                  <div className="price-row-div">{this.props.listing.bedrooms} bd</div>
                  <div className="mid-border-div">{this.props.listing.bathrooms} ba</div>
                  <div className="price-row-div">{lotSizeStr} sqft</div>
                </div>
                <div className="text-row">
                  <div>{this.props.listing.address},</div>
                  <div>{this.props.listing.city},</div>
                  <div>{this.props.listing.state}</div>
                  <div>{this.props.listing.zip_code}</div>
                </div>

                <div className="map-buttons-div">
                  <div className="save-search-button">Take a Tour</div>
                  <div className="button-white">Contact Agent</div>
                </div>
              </div>

              <div className="map-flex">
                <DillMapContainer single="single" singleListing={this.props.listing} />
              </div>

              <div className="overview">
                <div className="ovt">Overview</div>
                <div className="overview-top-row">

                  <div className="bld">Time on Dillow 1 day</div>
                  <div className="mid">Views {this.props.listing.views}</div>
                  <div className="bld">Saves {this.props.listing.saves}</div>
                </div>


                <div className="description">
                  {this.props.listing.description}
                </div>
              </div>
            </div>
            <div className="exit-mover">
              <button className="other-exit-button" onClick={this.props.exitModal}>X</button>
            </div>
          </div>



        </div>
      )
    }
  }

}

export default HomePage;