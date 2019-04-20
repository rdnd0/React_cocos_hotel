import React, { Component } from "react";
import Status from "./Status";
import Roomlist from "./Roomlist";
import SideBar from "./SideBar";

export default class Summary extends Component {
  state = {
    roomName: "",
    roomPrice: 0,
    checkin: "",
    checkout: "",
    adults: 0,
    children: 0
  };

  componentWillMount() {
    let data = JSON.parse(localStorage.getItem("reservation"));
    if (data) {
      const { roomName, roomPrice, checkin, checkout, adults, children } = data;
      this.setState({
        roomName,
        roomPrice,
        checkin,
        checkout,
        adults,
        children
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { checkin, checkout, adults, children } = this.props.tripDetails;
    prevProps !== this.props &&
      this.setState({
        checkin,
        checkout,
        adults,
        children
      });
  }

  handleRoomDetails = (roomName, roomPrice) => {
    this.setState({
      roomName,
      roomPrice
    });
  };

  render() {
    return (
      <div className="container rar-summary">
        <Status />
        <div className="row">
          <Roomlist roomDetails={this.handleRoomDetails} />
          <SideBar tripDetails={this.state} />
        </div>
      </div>
    );
  }
}
