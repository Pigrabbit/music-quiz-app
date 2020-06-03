import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to={{pathname: "/"}} >
          <button className="header__homeBtn">
            <p> Back to home </p>
          </button>
        </Link>
        <h3>This is a header</h3>
      </header>
    );
  }
}

export default Header;
