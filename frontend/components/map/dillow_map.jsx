import React from 'react';


class DillowMap extends React.Component {
  constructor(props) {
    super(props)
  }

  createMap() {
    const mapOptions = {
      center: { lat: 32.7767, lng: -96.7970 },
      zoom: 13
    };

    const map = new google.maps.Map(this.mapNode, mapOptions);
    const testPos = { lat: 32.7777, lng: -96.7980 }
    const marker = new google.maps.Marker({
      position: testPos,
      map: map
    });

    const geocoder = new google.maps.Geocoder();
    let address = "7818 Caruth Ct, Dallas, TX 75225"
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
  }

  render() {

    return( 
      <div id="map" ref={ map => this.mapNode = map}></div>
    )

  }
}


export default DillowMap;


