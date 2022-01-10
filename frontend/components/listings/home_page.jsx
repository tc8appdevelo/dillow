import React from "react";



function HomePage(props) {

  if (props.showListing === 1) {
    return (
      <div></div>
    )
  } else {
    return (
      <div id="dd">
        <div className="flexbox-container-container">fdsafdsa
          <div className="big-container-pic">fdsa
            <div className="top-picture">
              top picture
            </div>
            <div className="flexbox-container">
              <div>flex1</div>
              <div>flex2</div>
              <div>flex3</div>
              <div>flex4</div>
              <div>flex5</div>
              <div>flex6</div>
              <div>flex7</div>
              <div>flex8</div>
              <div>flex9</div>
              <div>flex0</div>
            </div>
          </div>
        </div>
      </div>




    )
  }
}

export default HomePage;