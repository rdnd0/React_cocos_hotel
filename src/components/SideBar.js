import React, { Component } from "react";
import Modal from "./Modal";

export default class SideBar extends Component {
  state = {
    reservation: {},
    messageOn: false
  };
  handleSave = () => {
    let reservation = { ...this.props.tripDetails };
    localStorage.setItem("reservation", JSON.stringify(reservation));
    this.setState({
      messageOn: true
    });
  };

  handleLoad = () => {
    this.setState({
      reservation: JSON.parse(localStorage.getItem("reservation"))
    });
  };

  componentDidMount() {
    localStorage.length && this.handleLoad();
  }

  closeMessage = () => {
    this.setState({
      messageOn: false
    });
  };

  render() {
    const {
      checkin,
      checkout,
      adults,
      children,
      roomName,
      roomPrice
    } = this.state.reservation;

    const {
      checkin: from,
      checkout: to,
      adults: adNum,
      children: childNum,
      roomName: name,
      roomPrice: price
    } = this.props.tripDetails;

    return (
      <div className="col-md-4 sidebar">
        {this.state.messageOn && (
          <Modal closeModal={this.closeMessage}>
            <h1>Reservation saved</h1>
          </Modal>
        )}
        <div className="card">
          <h2>Reservation Summary</h2>
          <div className="clearfix">
            <h5 className="pull-left">
              {name || roomName || (
                <span style={{ color: "red" }}>please select a room</span>
              )}
            </h5>
            <div className="form-group pull-right">
              <select className="pull-right" id="rooms">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>
          </div>

          <div className="clearfix">
            <div className="card-content">
              <p className="main">Check in</p>
              <p className="base">From 15.00h</p>
            </div>

            <div className="card-content">
              <p className="main">Check out</p>
              <p className="base">Before 12.00h</p>
            </div>

            {(checkin && checkout) || (from && to) ? (
              <div className="card-content">
                <p className="main">Reservation date</p>
                <p className="base">
                  From{" "}
                  <strong>
                    <span id="checkin-summary">{from || checkin}</span>
                  </strong>{" "}
                  to <strong id="checkout-summary">{to || checkout}</strong>
                </p>
              </div>
            ) : (
              <div className="card-content">
                <p className="main" style={{ color: "red" }}>
                  Please chose your dates
                </p>
              </div>
            )}

            {adults || adNum ? (
              <div className="card-content">
                <p className="main">People</p>
                <p className="base" id="adults-summary">
                  {adNum || adults} Adults
                </p>
                <p className="base" id="children-summary">
                  {childNum || children} Children
                </p>
              </div>
            ) : childNum || children ? (
              <div className="card-content">
                <p className="main" style={{ color: "red" }}>
                  Please select the number of adult people as well
                </p>
              </div>
            ) : (
              <div className="card-content">
                <p className="main" style={{ color: "red" }}>
                  Please select the number of people
                </p>
              </div>
            )}

            <div className="card-checkout clearfix">
              <div className="left pull-left">
                <p className="main">Total</p>
                <p className="base">
                  <a href="#">Price details ></a>
                </p>
              </div>
              <div className="right pull-right">
                <p className="main">{price || roomPrice || "€0"}</p>
              </div>
            </div>

            <button
              className="btn btn-primary btn-group-justified"
              onClick={this.handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
