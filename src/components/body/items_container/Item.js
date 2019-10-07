import React from "react";
import "./ItemsContainer.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.item.isChecked
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(event) {
    this.setState({
      isChecked: event.target.checked
    });
    this.props.setItemsState(this.props.item.id, event.target.checked);
  }
  render() {
    return (
      <li id="this.props.id" className={this.state.isChecked ? "checked" : ""}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          className="checkbox"
          onChange={this.handleChecked}></input>
        <span className={this.state.isChecked ? "completed" : ""}>
          {this.props.item.name}
        </span>
      </li>
    );
  }
}

export default Item;
