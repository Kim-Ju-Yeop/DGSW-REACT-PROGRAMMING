import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="baeminClient">
            BaeminClient
          </Link>
        </div>
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="baeminServer">
            BaeminServer
          </Link>
        </div>
      </div>
    );
  }
}

export default Project;