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
    this.locationSearch = this.locationSearch.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map
    this.map = new google.maps.Map(map, mapOptions);
    
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.single === "single") {
      this.MarkerManager.createMarkerFromListing(this.props.singleListing);
    } 
    
    else if (this.props.filters.location != "none") {
      this.locationSearch(this.props.filters.location)
      this.props.queryCompleted();
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings)
    } 
    
    else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings)
    }
    //this.locationSearch();
    // else if (this.props.listings[0]) {
      
    //   this.MarkerManager.updateMarkers(this.props.listings)
    // }
  }

  componentDidUpdate() {
    
    if (this.props.single === "single") {
      this.MarkerManager.createMarkerFromListing(this.props.singleListing)
    } else if (this.props.newQuery) {
      this.locationSearch(this.props.newQuery);
      this.props.queryCompleted();
    } else {
      this.MarkerManager.updateMarkers(this.props.listings);
    }

 
  }

  locationSearch(query) {
    let request = {
      query: query,
      fields: ['name', 'geometry'],
    }
    let map = this.map;
    let service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {

        map.setCenter(results[0].geometry.location);
      }
    })
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