import React from 'react';
import formatPrice from '../../utils/format_price';


class DillowMap extends React.Component {
  constructor(props) {
    super(props)
  }

  formatAddress(listing) {
    const formated = listing.address + ", " + listing.city + ", " + listing.state + " " + listing.zip_code
    return formated;
  }

  createMap() {
    const mapOptions = {
      center: { lat: 32.7767, lng: -96.7970 },
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

    const map = new google.maps.Map(this.mapNode, mapOptions);
    // map.setOptions({ styles: styles["hide"]})

    const geocoder = new google.maps.Geocoder();
    // let address = "7818 Caruth Ct, Dallas, TX 75225"
    // let address = this.formatAddress("7818 Caruth Ct", "Dallas", "TX", "75225")
    let testListing = this.props.listings[9];
    let address = this.formatAddress(testListing);
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  componentDidMount() {
    this.createMap();
    console.log(this.props.listings[9])
  }

  render() {

    return( 
      <div id="map" ref={ map => this.mapNode = map}></div>
    )

  }
}


export default DillowMap;


