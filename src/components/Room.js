import React, { Component } from "react";

export default class Room extends Component {
  state = {
    price: this.props.price,
    messageOn: false
  };
  componentDidMount() {
    let path = window.location.pathname;
    let regex = /promo_code=\d{2}$/;
    if (path && regex.test(path)) {
      let discount = path.replace(/\/promo_code=/, "");
      this.setState({
        price: (this.state.price * (100 - discount)) / 100
      });
    }
  }

  render() {
    const { name, desc, size, beds, people } = this.props;
    const { price } = this.state;

    return (
      <div
        className="card clearfix pointer active"
        onClick={() => {
          this.props.onClick(name, price);
        }}
      >
        <div className="room-image">
          <img src="images/cocos/room_1.png" width="100%" />
        </div>

        <div className="room-content">
          <h5 className="form-group">{name}</h5>
          <p className="form-group">{desc}</p>

          <p className="form-group">Size: {size}</p>

          <div className="room-info">
            <div className="item">
              <span className="inline-block">
                <img src="images/icons/double-bed.svg" width="40" />
              </span>
              <div>Beds: {beds}</div>
            </div>
            <div className="item">People: {people}</div>
            <div className="item price text-right">
              <span className="line-through" />€{price}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
