import React from 'react';

class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div id="profile-navbar">
        <div className="profile-navbar-buttons">
          <div className="profile-navbar-button" onClick={() => this.props.handleTabClick("saved")}>
            Saved homes
          </div>
          <div className="profile-navbar-button">
            Saved searches
          </div>
          <div className="profile-navbar-button" onClick={() => this.props.handleTabClick("selling")}>
            Your home
          </div>
        </div>

      </div>
    )
  }
}

export default ProfileNavBar;