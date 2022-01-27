import React from "react";
import DillowMapContainer from "../map/dillow_map_container"
import formatPrice from "../../utils/format_price";
import { saveListing } from "../../actions/listing_actions";


function HomePage(props) {


  if (props.showListing === null) {
    return (
      <div></div>
    )
  } else {
    
    const priceStr = formatPrice(props.showListing.price);
    const lotSizeStr = formatPrice(props.showListing.lot_size);
    return (

      <div id="dd">

        <div className="flexbox-container-container">
            <div className="pictures">
            <div className="large-picture" style={{ backgroundImage: `url(${props.showListing.photoUrl})` }}>
                
              </div>
              
            </div>
            <div className="home-info">
              <div className="home-info-top-bar">
                  <div className="title-text">Dillow</div>
                  <div className="right-info-top-bar">
                    <div className="save">Save</div>
                    <div>Share</div>
                    <div>More</div>
                  </div>
              </div>
              <div className="info-price-box">
                <div className="price-row">
                  <div className="price">{priceStr}</div>
                  <div>{props.showListing.bedrooms} bd</div>
                  <div className="mid-border-div">{props.showListing.bathrooms} ba</div>
                  <div>{lotSizeStr} sqft</div>
                </div>
                <div className="text-row">
                  <div>{props.showListing.address},</div>
                  <div>{props.showListing.city},</div>
                  <div>{props.showListing.state}</div>
                  <div>{props.showListing.zip_code}</div>
                </div>

                <div className="map-buttons-div">
                  <div className="save-search-button">Take a Tour</div>
                  <div className="button-white">Contact Agent</div>
                </div>
              </div>

            <div className="map-flex">
              <DillowMapContainer />
            </div>

            <div className="overview">
              <div className="ovt">Overview</div>
                <div className="overview-top-row">
              
                    <div className="bld">Time on Dillow 1 day</div>
                    <div className="mid">Views {props.showListing.views}</div>
                    <div className="bld">Saves {props.showListing.saves}</div>
               </div>
              

                <div className="description">
                  {props.showListing.description}
                </div>
            </div>
          </div>
        </div>
        <div className="exit-mover">
          <button className="other-exit-button" onClick={props.exitModal}>X</button>
        </div>

      
      </div>
    )
  }
}

export default HomePage;