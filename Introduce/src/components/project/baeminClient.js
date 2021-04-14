import React, { Component } from "react";
import Project from "./project";

class BaeminClient extends Component {
  render() {
    return (
      <div>
        <Project />
        <div className="container">
          <h2>주제 : BaeminClient (안드로이드)</h2>
        </div>
      </div>
    );
  }
}

export default BaeminClient;