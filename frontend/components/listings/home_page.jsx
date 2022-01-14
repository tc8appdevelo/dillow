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
                  <div className="title-text">dillow</div>
                  <div className="right-info-top-bar">
                    <div>Save</div>
                    <div>Share</div>
                    <div>More</div>
                  </div>
              </div>
              <div className="info-price-box">
                <div className="price-row">
                  <div className="price">${props.showListing.price}</div>
                  <div>3 bd</div>
                  <div className="mid-border-div">2 ba</div>
                  <div>1123 sqft</div>
                </div>
                <div className="text-row">
                  <div>3432 road drive</div>
                  <div>Austin</div>
                  <div>TX</div>
                  <div>43322</div>
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