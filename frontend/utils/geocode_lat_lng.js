
export default class GeocodeLatLng {
  constructor(listing, editListing) {
    this.listing = listing;
    this.editListing = editListing;

    this.formatAddress = this.formatAddress.bind(this);
    this.getLongLat = this.getLongLat.bind(this);
    this.longLatAllListings = this.longLatAllListings.bind(this);
    this.parseLocation = this.parseLocation.bind(this);
    this.addressToLatLng = this.addressToLatLng.bind(this);
  }



  formatAddress(listing) {
    const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
    return formated;
  }

  getLongLat(listing) {
    let address = this.formatAddress(listing);
    let parseLocation = this.parseLocation;
    const geocoder = new google.maps.Geocoder();
    let lt
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == 'OK') {
        parseLocation(results[0].geometry.location, listing);
      } else {
        console.log("Geocode was unsuccessful")
      }
    })
    return lt
  }

  parseLocation(location, listing) {
    let lat = location.lat().toString().substr(0, 12);
    let lng = location.lng().toString().substr(0, 12);
    listing["lat"] = lat;
    listing["long"] = lng;
    const formData = new FormData();
    formData.append('listing[lat]', listing.lat);
    formData.append('listing[long]', listing.long);
    this.editListing(formData, listing.id);
  }

  addressToLatLng(location) {
    let lat = location.lat().toString().substr(0, 12);
    let lng = location.lng().toString().substr(0, 12);
    let coords = {};
    coords["lat"] = lat;
    coords["lng"] = lng;
    return coords;
  }

  longLatAllListings() {

  }
}

