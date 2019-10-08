import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="footer">
        <ul className="filters">
          <li>
            <a href="#" onClick={(e) => this.props.filterTodoItems("All", e)}>
              ALL
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => this.props.filterTodoItems("Active", e)}>
              Active
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => this.props.filterTodoItems("Completed", e)}>
              Completed
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
