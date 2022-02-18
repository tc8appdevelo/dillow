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

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.listings[0]) {
      this.MarkerManager.updateMarkers(this.props.listings)
    }
  }

  handleMarkerClick(listing) {
    console.log(`${listing} marker clicked`);
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