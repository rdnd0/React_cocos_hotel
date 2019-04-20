import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={this.props.closeModal}
        >
          <div
            style={{
              position: "relative",
              padding: "5px 20px",
              backgroundColor: "white",
              width: "40%",
              height: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "space-around",
              marginBottom: "68px",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0,0,0,0.8)",
              minWidth: "360px",
              minHeight: "180px",
              zIndex: "9"
            }}
          >
            {this.props.children}
            <button className="btn btn-primary btn-group-justified">
              {this.props.message}
            </button>
            <button
              onClick={this.props.closeModal}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                border: "none",
                background: "none"
              }}
            >
              <span style={{ fontWeight: "bold", color: "dimgrey" }}>X</span>
            </button>
          </div>
        </div>
      </Portal>
    );
  }
}
