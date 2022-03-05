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
  zoom: 10,
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

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.single === "single") {
      this.MarkerManager.createMarkerFromListing(this.props.singleListing);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings)
    }
    
    // else if (this.props.listings[0]) {
      
    //   this.MarkerManager.updateMarkers(this.props.listings)
    // }
  }

  componentDidUpdate() {
    if (this.props.single === "single") {
      this.MarkerManager.createMarkerFromListing(this.props.singleListing)
    } else {
      this.MarkerManager.updateMarkers(this.props.listings)
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      }
      this.props.updateFilter('bounds', bounds);
    })
    
  }

  handleMarkerClick(listing) {
    if (this.props.single === "single") {
      return "";
    } else {
      this.props.handleMarkerClick(listing.id);
    }
  }

  render() {
      return (
        <div className="map--wrap">
          <div className="map" ref="map"></div>
        </div>
      )
  }

}

export default DillMap;