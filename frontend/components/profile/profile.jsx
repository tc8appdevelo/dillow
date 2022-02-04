import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import ProfileNavBar from './profile_navbar';
import SellContainer from './sell_container';
import SavedListingsContainer from '../saves/saved_listings_container';
import CurrentlySellingContainer from './currently_selling_container';
import EditListingContainer from './edit_listing_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: <div>constructor tab</div>,
      currentListing: null,
    }

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab, listing = null) {
    let showTab;
    switch (tab) {
      case "saved":
        showTab = <SavedListingsContainer />
        break
      case "selling":
        showTab = <CurrentlySellingContainer handleClick={this.handleTabClick} />
        break
      case "edit":
        showTab = <EditListingContainer listing={listing} handleClick={this.handleTabClick} />
        break
      default:
        showTab = <div>Default</div>
        break
    }

    this.setState({
      currentTab: showTab,
    })
  }

  render() {
    let tab = this.state.currentTab;
    return (
      <div>
        <div id="fix-nav">
          <NavBarContainer />
        </div>
        <div>
          <ProfileNavBar handleTabClick={this.handleTabClick} />
        </div>
        {tab}
      </div>
    )
  }
}

export default Profile;