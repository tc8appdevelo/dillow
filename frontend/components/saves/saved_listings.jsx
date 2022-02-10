import React from "react";
import SavedListingsItem from "./saved_listings_item";
import HomePage from "../listings/home_page";

class SavedListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: null
    }

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchSavedListings();
  }


  showModal(idx) {
    const listing = this.props.savedListings.find(x => x.id === idx);
    this.setState({
      currentListing: listing
    })
  }

  exitModal() {
    this.setState({
      currentListing: null,
    })
  }


  render() {

    

    if (this.props.savedListings[0]) {
      const currentListing = this.state.currentListing;
      
      return (
        <div id="saved--page-wrapper">
          
          <div className="saved--all-content-wrap">
            <div className="saved--all-content">
              <div className="saved--title">
                Saved homes
              </div>
              
              <div id="saved--homes-wrap">
                {this.props.savedListings.map(listing => (<SavedListingsItem key={listing.id} listing={listing} unSaveListing={this.props.unSaveListing} handleClick={this.showModal} />))}
              </div>
              
            </div>
          </div>
          <HomePage showListing={currentListing} exitModal={() => this.exitModal()} />
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