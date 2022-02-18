import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "./marker_manager";


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 40.712776,
    lng: -74.005974
  },
  zoom: 13,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{visibility: "off"}],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{visibility: "off"}],
    },
  ],
};


class DillMap extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    const map = this.refs.map
    this.map = new google.maps.Map(map, mapOptions);

    this.setState({
      listings: this.props.listings,
      map: this.map,
    })
    // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // if (this.props.listings[0]) {
      
      // let pos = this.getPositions(this.props.listings[0]);
      // console.log(pos);
    //   this.MarkerManager.updateMarkers(this.props.listings);
    // }
  }



  handleMarkerClick(listing) {
    console.log(`${listing} marker clicked`);
  }

  formatAddress(listing) {
    const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
    return formated;
  }

  // getPositions(listing) {
  //   let positions
  //   let address = this.formatAddress(listing);
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({'address': address}), function(results, status) {
  //     if (status == 'OK') {
  //       return results[0].geometry.location
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  render() {
    
    // if (this.props.listings[0]) {
      return (
        <div className="map--wrap">
          <div className="map" ref="map"></div>
          <MarkerManager listings={this.props.listings} map={this.map} />
        </div>
      )
    // } else {
    //   return (
    //     <div></div>
    //   )
    // }

  }

}

export default DillMap;