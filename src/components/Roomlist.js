import React, { Component } from "react";
import Room from "./Room";

export default class Roomlist extends Component {
  handleOnClick = (roomName, roomPrice) => {
    this.props.roomDetails(roomName, roomPrice);
  };
  render() {
    return (
      <div className="col-md-8 main">
        <Room
          name="Mini Dreamy Room"
          desc="Generous and comfortable these modern furnished rooms offer two
            queen-size beds and are on the first floor."
          size="25m2"
          beds={1}
          people={2}
          price={350}
          onClick={this.handleOnClick}
        />
        <Room
          name="Sweet Bungalow"
          desc="The perfect blend of comfort and culture, our superior room with a
          central garden view has the stunning, and comes with a double bed."
          size="50m2"
          beds={1}
          people={2}
          price={400}
          onClick={this.handleOnClick}
        />
        <Room
          name="Lost Cocos Suite"
          desc="If you want a little extra from your stay, you might like our
          superior rooms. A garden view room has a private patio and a
          double bed."
          size="125m2"
          beds={3}
          people={4}
          price={750}
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}
