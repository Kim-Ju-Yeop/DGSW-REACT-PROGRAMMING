import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menuColumn">
        <div className="column">
          <Link style={{ textDecoration: "none" }} to="/">
            홈
          </Link>
        </div>
        <div className="column">
          <Link style={{ textDecoration: "none" }} to="/introduce">
            소개
          </Link>
        </div>
        <div className="column">
          <Link style={{ textDecoration: "none" }} to="/project/baeminClient">
            프로젝트
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;