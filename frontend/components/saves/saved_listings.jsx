import React from "react";
import SavedListingsItem from "./saved_listings_item";


class SavedListings extends React.Component {
  constructor(props) {
    super(props);
    

    //this.unSaveHouse = this.unSaveHouse.bind(this);
  }

  componentDidMount() {
    this.props.fetchSavedListings();
  }




  // exitModal() {
  //   this.setState({
  //     currentListing: null,
  //   })
  // }


  render() {
    if (this.props.savedListings[0]) {
      // const currentListing = this.state.currentListing;
      return (
        <div id="saved--page-wrapper">
          
          <div className="saved--all-content-wrap">
            <div className="saved--all-content">
              <div className="saved--title">
                Saved homes
              </div>
              <div id="saved--homes-list-wrapper">
                <div id="saved--homes-wrap">
                  {this.props.savedListings.map(listing => (<SavedListingsItem key={listing.id} listing={listing} unSaveListing={this.props.unSaveListing} />))}
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

export default SavedListings;