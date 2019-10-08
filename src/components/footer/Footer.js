import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      filterCondition: "All"
    };
  }

  filterTodoItems(condition) {
    this.props.filterTodoItems(condition);
    this.setState({ filterCondition: condition });
  }

  render() {
    return (
      <div className="footer">
        <ul className="filters">
          <li>
            <button
              className={
                this.state.filterCondition === "All" ? "filetered" : "btn"
              }
              onClick={(e) => this.filterTodoItems("All", e)}>
              ALL
            </button>
          </li>
          <li>
            <button
              className={
                this.state.filterCondition === "Active" ? "filetered" : "btn"
              }
              onClick={(e) => this.filterTodoItems("Active", e)}>
              Active
            </button>
          </li>
          <li>
            <button
              className={
                this.state.filterCondition === "Completed" ? "filetered" : "btn"
              }
              onClick={(e) => this.filterTodoItems("Completed", e)}>
              Completed
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
