import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to={{pathname: "/"}} >
          <button className="header__home-btn">
            <p> Back to home </p>
          </button>
        </Link>
        <h3 className="header__text">Music Quiz APP</h3>
      </header>
    );
  }
}

export default Header;
