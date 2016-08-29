class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {

    let newBenches = this._benchesToAdd(benches);

    newBenches.forEach((bench) => {
      this._createMarkerFromBench(bench);
    });

    let toRemove = this._markersToRemove(benches);
    toRemove.forEach((marker) => {
      this._removeMarker(marker);
    });
  }

  _markersToRemove(benches) {
    let toRemove = [];
    let notInState;
    this.markers.forEach((marker) => {
      notInState = true;
      benches.forEach((bench) => {
        if (marker.benchId === bench.id) {
          notInState = false;
        }
      });
      if (notInState) {
        toRemove.push(marker);
      }
    });
    return toRemove;
  }

  _removeMarker(marker) {
    let index = -1;
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i].benchId === marker.benchId) {
        index = i;
      }
    }
    marker.setMap(null);
    if (index === -1) {
      console.log("ERROR");
    }
    this.markers = this.markers.slice(0, index).concat(this.markers.slice(index + 1));
  }

  _benchesToAdd(benches) {
    let newBenches = [];
    let alreadyMarker;
    benches.forEach((bench) => {
      alreadyMarker = false;
      this.markers.forEach((marker) => {
        if (marker.benchId === bench.id) {
          alreadyMarker = true;
        }
      });
      if (!alreadyMarker) {
        newBenches.push(bench);
      }
    });
    return newBenches;
  }

  _createMarkerFromBench(bench) {
    let latLng = {lat: bench.lat, lng: bench.lng};

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      benchId: bench.id
    });
    this.markers.push(marker);

  }
}

export default MarkerManager;
