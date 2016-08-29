import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatsNumber: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let bench = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: this.state.description,
      seating: this.state.seatsNumber
    }
    this.props.handleSubmit(bench);
    this.props.router.push("/");
  }

  updateSeats(event) {
    this.setState({seatsNumber: event.target.value});
  }

  updateDescription(event) {
    this.setState({description: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Latitude
          <input type="number" value={this.props.lat} disabled />
        </label>
        <label>
          Longitude
          <input type="number" value={this.props.lng} disabled />
        </label>
        <label>
          Number of Seats
          <input type="number" onChange={this.updateSeats} value={this.state.seatsNumber} />
        </label>
        <label>
          Description
          <textarea onChange={this.updateDescription} value={this.state.Description} />
        </label>
        <input type="submit" />
      </form>
    );
  }

}




export default withRouter(BenchForm);
