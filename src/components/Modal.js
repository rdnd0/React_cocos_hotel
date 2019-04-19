import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <div
          style={{
            position: "absolute",
            top: "25vh",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.props.children}
          <button onClick={this.props.closeModal}>close</button>
        </div>
      </Portal>
    );
  }
}
