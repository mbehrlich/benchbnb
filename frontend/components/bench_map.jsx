import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
    this.allBenches = this.allBenches.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount(){
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    let bounds = {};

    this.map.addListener('idle', () => {
      let ne = this.map.getBounds().getNorthEast();
      let sw = this.map.getBounds().getSouthWest();
      bounds = {northEast: {lat: ne.lat(), lng: ne.lng()}, southWest: {lat: sw.lat(), lng: sw.lng()}};
      this.props.updateBounds(bounds);
    });

    this.map.addListener('click', (e) => {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      this._handleClick({lat, lng});
    });

    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.allBenches());
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  allBenches() {
    let allBenchKeys = Object.keys(this.props.benches);
    let allBenches = allBenchKeys.map((id) => {
      return this.props.benches[id];
    });
    return allBenches;
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.allBenches());
  }

  render() {
    return (
      <div id='map-container' ref='map'></div>
    );
  }
}

export default withRouter(BenchMap);
