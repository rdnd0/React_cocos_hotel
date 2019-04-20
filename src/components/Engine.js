import React, { Component } from "react";
import Modal from "./Modal";

export default class Engine extends Component {
  state = {
    checkin: "",
    checkout: "",
    adults: 0,
    children: 0,
    messageOn: false,
    detailsComplete: false
  };

  componentWillMount() {
    let data = JSON.parse(localStorage.getItem("reservation"));
    if (data) {
      const { checkin, checkout, adults, children } = data;
      this.setState({
        checkin,
        checkout,
        adults,
        children
      });
    } else {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;

      let tomorrow = new Date();
      let dt = String(tomorrow.getDate() + 1).padStart(2, "0");
      tomorrow = dt + "/" + mm + "/" + yyyy;

      this.setState({
        checkin: today,
        checkout: tomorrow
      });
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { checkin, checkout, adults } = this.state;
    if (checkin && checkout && adults) {
      this.props.handleTrip(this.state);
      this.setState({
        messageOn: true,
        detailsComplete: true
      });
    } else {
      this.setState({
        messageOn: true,
        detailsComplete: false
      });
    }
  };

  closeMessage = () => {
    this.setState({
      messageOn: false
    });
  };

  render() {
    const { checkin, checkout, children, adults } = this.state;

    return (
      <div className="engine text-center">
        {this.state.detailsComplete
          ? this.state.messageOn && (
              <Modal
                closeModal={this.closeMessage}
                message={"Let's choose a room"}
              >
                <h2>Trip configuration selected!</h2>
              </Modal>
            )
          : this.state.messageOn && (
              <Modal closeModal={this.closeMessage} message={"Back"}>
                <h2>Please choose your details</h2>
              </Modal>
            )}
        <div className="engine-wrapper">
          <div className="container text-center">
            <form
              id="search"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input
                    id="checkin"
                    name="checkin"
                    type="text"
                    className="form-control"
                    defaultValue={checkin}
                    onChange={this.handleInput}
                    style={{ zIndex: "auto" }}
                  />
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input
                    id="checkout"
                    name="checkout"
                    type="text"
                    className="form-control"
                    defaultValue={checkout}
                    onChange={this.handleInput}
                    style={{ zIndex: "auto" }}
                  />
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </div>
                </div>
              </div>

              <div className="form-group select-inline">
                <select
                  className="form-control"
                  placeholder="Adults"
                  id="adults"
                  name="adults"
                  onChange={this.handleInput}
                  defaultValue={adults}
                >
                  <option value="">Adults</option>
                  <option value="1">Adults: 1</option>
                  <option value="2">Adults: 2</option>
                  <option value="3">Adults: 3</option>
                  <option value="4">Adults: 4</option>
                  <option value="5">Adults: 5</option>
                  <option value="6">Adults: 6</option>
                  <option value="7">Adults: 7</option>
                  <option value="8">Adults: 8</option>
                  <option value="9">Adults: 9</option>
                </select>
              </div>
              <div className="form-group select-inline">
                <select
                  className="form-control"
                  placeholder="Children"
                  id="children"
                  name="children"
                  onChange={this.handleInput}
                  defaultValue={children}
                >
                  <option value="">Children</option>
                  <option value="1">Children: 1</option>
                  <option value="2">Children: 2</option>
                  <option value="3">Children: 3</option>
                  <option value="4">Children: 4</option>
                  <option value="5">Children: 5</option>
                  <option value="6">Children: 6</option>
                  <option value="7">Children: 7</option>
                  <option value="8">Children: 8</option>
                  <option value="9">Children: 9</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Modify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
