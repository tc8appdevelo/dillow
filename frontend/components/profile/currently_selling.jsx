import React from "react";
import CurrentlySellingItem from "./currently_selling_item";
import NavBarContainer from "../navbar/nav_bar_container";

class CurrentlySelling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: null,
    }
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings({selling: true});
  }


  showModal(idx) {
    console.log("holder for click show modal" + idx);
  }

  render() {
    if (this.props.currentlySelling[0]) {
      // const currentListing = this.state.currentListing;
      return (
        <div id="saved--page-wrapper">
          <div id="fix-nav">
            <NavBarContainer />
          </div>

          <div className="saved--all-content-wrap">
            <div className="saved--all-content">
              <div className="saved--title">
                Saved homes
              </div>
              <div id="saved--homes-list-wrapper">
                <div id="saved--homes-wrap">
                  {this.props.currentlySelling.map(listing => (<CurrentlySellingItem key={listing.id} listing={listing} handleClick={this.showModal}/>))}
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}

export default CurrentlySelling;