import React from "react";



function HomePage(props) {

  

  if (props.showListing === null) {
    return (
      <div></div>
    )
  } else {
    
    console.log(props.showListing.photoUrl);
    
    return (

      <div id="dd">

        <div className="flexbox-container-container">
            <div className="pictures">
            <div className="large-picture" style={{ backgroundImage: `url(${props.showListing.photoUrl})` }}>
                large-picture
              </div>
              <div className="small-pictures">
                small-pictures
              </div>
            </div>
            <div className="home-info">
              home info
            </div>
        </div>
        
        <button className="exit-button" onClick={props.exitModal}>X</button>
      
      </div>
    )
  }
}

export default HomePage;