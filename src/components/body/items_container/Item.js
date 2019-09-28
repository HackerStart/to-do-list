import React from "react";
import "./ItemsContainer.css";

class Item extends React.Component {
  render() {
    return (
      <li className={this.props.item.isChecked ? "checked" : ""}>
        <input
          type="checkbox"
          checked={this.props.item.isChecked}
          className="checkbox"></input>
        <span>{this.props.item.name}</span>
      </li>
    );
  }
}

export default Item;
