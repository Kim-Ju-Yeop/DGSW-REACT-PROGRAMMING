import React, { Component } from "react";
import Project from "./project";

class BaeminServer extends Component {
  render() {
    return (
      <div>
        <Project />
        <div className="container">
          <h2>주제 : BaeminServer (백엔드)</h2>
        </div>
      </div>
    );
  }
}

export default BaeminServer;