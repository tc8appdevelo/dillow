import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "./marker_manager";


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

// const mapOptions = {
//   center: {
//     lat: 40.712776,
//     lng: -74.005974
//   },
//   zoom: 4,
//   styles: [
//     {
//       featureType: "poi",
//       elementType: "labels",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "transit",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }],
//     },
//   ],
// };


class HomeMap extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const map = this.refs.map

    const mapOptions = {
      center: {
        lat: this.props.listing.lat,
        lng: this.props.listing.long
      },
      zoom: 10,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ],
    };
    
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.createMarkerFromListing(this.props.listing);
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
      <div className="home-map--wrap">
        <div className="map" ref="map"></div>
      </div>
    )
  }

}

export default HomeMap;