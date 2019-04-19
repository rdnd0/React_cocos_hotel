import React, { Component } from "react";
import Nav from "./components/Nav";
import Engine from "./components/Engine";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    trip: {}
  };
  handleTrip = trip => {
    this.setState({
      trip
    });
  };
  render() {
    return (
      <div className="room-and-rates">
        <Nav />
        <Engine handleTrip={this.handleTrip} />
        <Summary tripDetails={this.state.trip} />
        <Footer />
      </div>
    );
  }
}

export default App;
