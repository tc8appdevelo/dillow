import React from 'react';


class DillowMap extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  
  componentDidMount() {
    // set the map to show SF
    console.log(this.props)
    const mapOptions = {
      center: { lat: 32.7767, lng: -96.7970 }, // this is SF
      zoom: 13
    };

    
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // let m = { position: new google.maps.LatLng(32.7867, -96.7970)}
    // let mk1 = new google.maps.Marker(m);

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // let m2 = { position: new google.maps.LatLng(32.7667, -96.7870) }
    // let mk2 = new google.maps.Marker(m2);
    // mk1.setMap(this.map);

    // mk2.setMap(this.map);


  }

  render() {

    

    return( 
      <div id="map" ref={ map => this.mapNode = map}></div>
    )
  }

}


export default DillowMap;


