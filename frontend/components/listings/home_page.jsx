import React from "react";
import DillowMap from "../map/dillow_map";


function HomePage(props) {

  

  if (props.showListing === null) {
    return (
      <div></div>
    )
  } else {
    
    
    
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
                    <div>Save</div>
                    <div>Share</div>
                    <div>More</div>
                  </div>
              </div>
              <div className="info-price-box">
                <div className="price-row">
                  <div className="price">${props.showListing.price}</div>
                  <div>{props.showListing.bedrooms}</div>
                <div className="mid-border-div">{props.showListing.bathrooms}</div>
                <div>{props.showListing.lot_size}</div>
                </div>
                <div className="text-row">
                  <div>{props.showListing.address}</div>
                  <div>{props.showListing.city}</div>
                  <div>{props.showListing.state}</div>
                  <div>{props.showListing.zipcode}</div>
                </div>

                <div className="map-buttons-div">
                  <div className="save-search-button">Take a Tour</div>
                  <div className="button-white">Contact Agent</div>
                </div>
              </div>

            <div className="map-flex">
              <DillowMap />
            </div>
            </div>

        </div>
        
        <button className="exit-button" onClick={props.exitModal}>X</button>
      
      </div>
    )
  }
}

export default HomePage;