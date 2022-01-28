import React from "react";

class SavedListings extends React.Component {
  constructor(props) {
    super(props);
    props.fetchSavedListings();
  }



  render() {
    console.log(this.props)
    return (
      <div>

      </div>
    )
  }
}

export default SavedListings;