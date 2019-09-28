import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="filters">
          <li>
            <a href="#">ALL</a>
          </li>
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Complete</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
