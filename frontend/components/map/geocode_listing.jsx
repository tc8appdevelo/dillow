import React from "react";

class GeocodeListing extends React.Component {
  constructor(props) {
    super(props);
    this.parseLocation = this.parseLocation.bind(this);
    this.getLongLat = this.getLongLat.bind(this);
    this.formatAddress = this.formatAddress.bind(this);
    this.longLatAllListings = this.longLatAllListings.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings().then(() => this.longLatAllListings());
    if (this.props.newListing) {
      this.getLongLat(this.props.newListing);
    }

  }

  formatAddress(listing) {
    const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
    return formated;
  }

  getLongLat(listing) {
    let address = this.formatAddress(listing);
    let parseLocation = this.parseLocation;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == 'OK') {
        parseLocation(results[0].geometry.location, listing);
      } else {
        console.log("Geocode was unsuccessful")
      }
    })
  }
  parseLocation(location, listing) {
    let lat = location.lat().toString().substr(0, 12);
    let lng = location.lng().toString().substr(0, 12);
    listing["lat"] = lat;
    listing["long"] = lng;
    const formData = new FormData();
    formData.append('listing[lat]', listing.lat);
    formData.append('listing[long]', listing.long);
    this.props.editListing(formData, listing.id);
  }

  longLatAllListings() {
    this.props.listings.forEach(listing => {
      if (listing.long === null || listing.lat === null) {
        this.getLongLat(listing)
      }
    })
  }

  render() {

    return (
      <div></div>
    )
  }
}

export default GeocodeListing