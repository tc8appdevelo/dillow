import React from "react";

class MarkerManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      listingsObj: {},
      markers: {},
      map: props.map,

    }

    this.parseLocation = this.parseLocation.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.createMarkerFromListing = this.createMarkerFromListing.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  componentDidMount() {
    let listings = this.props.listings;
    this.setState({
      map: this.props.map,
    })

    listings.forEach(listing => {
      this.getPositions(listing);
    })

    //this.updateMarkers(this.props.listings);
    //this.createMarkerFromListing(this.state.listings[0]);
    // console.log(this.state)
    // console.log("mount up")
  }

  formatAddress(listing) {
    const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
    return formated;
  }

  getPositions(listing) {
    const map = this.props.map;
    //let createMarkerFromListing = this.createMarkerFromListing;
    // let markers = this.props.markers;
    let parseLocation = this.parseLocation;
    let address = this.formatAddress(listing);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        // let marker = new google.maps.Marker({
        //   map: map,
        //   position: results[0].geometry.location
        // })
        parseLocation(results[0].geometry.location, listing);
        //createMarkerFromListing(listing)
      } else {
        console.log("Geocode was unsuccessful")
      }
    })//.then(result => console.log(result));
    
    //return pos;
  }

  parseLocation(location, listing) {
    let lat = location.lat().toString().substr(0, 12);
    let lng = location.lng().toString().substr(0, 12);
    listing["lat"] = lat;
    listing["long"] = lng;
    console.log(listing);
    let newListings = {...this.state.listings}
    newListings[listing.id] = listing;
    this.createMarkerFromListing(listing);
    // this.setState({
    //   listings: newListings,
    // })

    // console.log(this.state.listings)
    // this.setState({
    //   ...state,
    //   listings: listing.id listing,
    // })
    // this.listingsObj[listing.id] = listing;
    // this.listingsObj[listing.id].lat = lat;
    // this.listingsObj[listing.id].long = lng;
  }


  getLatLngs(listings) {
    listings.forEach(listing => {
      this.getPositions(listing);
    })

  }

  updateMarkers(listings) {
    // console.log("update markers ran");
    // console.log(listings);
    // console.log(this.props.listingsObj)
    // Object.values(this.props.listingsObj).forEach(listing => {
    //   console.log(listing.lat);
    // })

    // let createMarkerFromListing = this.createMarkerFromListing;
    // const waitPromise = new Promise((resolve, reject) => {
    //   listings.forEach(listing => {
    //     this.getPositions(listing);
    //   })
    //   resolve();
    // }).then(() => {
      
    //   listings.forEach((listing) => {
    //     createMarkerFromListing(listing)
    //   })
      
    // }).then(() => {
    //   console.log("second then");
    // })

   


    // listings.forEach(listing => {
    //   this.props.getPositions(listing);
    // })
    // console.log(this.props.listingsObj);
    // debugger
    
    // Object.values(this.props.listingsObj).forEach(listing => {
    //   this.props.createMarkerFromListing(listing)
    //   console.log(listing);
    // })
    // listings
    //   .filter(listing => !listingsObj[listing.id])
    //   .forEach(newListing => this.props.createMarkerFromListing(newListing, this.props.handleClick))

    // Object.keys(this.props.markers)
    //   .filter(listingId => !listingsObj[listingId])
    //   .forEach((listingId) => this.props.removeMarker(this.props.markers[listingId]))
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long)
    const marker = new google.maps.Marker({
      position,
      map: this.props.map,
      listingId: listing.id
    })
    
    // this.props.markers[marker.listingId] = marker;
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default MarkerManager;