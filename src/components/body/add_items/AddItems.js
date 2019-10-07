import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: "", warning: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addToDoItem = this.addToDoItem.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  handleInputChange(event) {
    this.setState({ info: event.target.value, warning: false });
  }

  keyPressed(event) {
    if (event.key === "Enter") {
      this.addToDoItem();
    }
  }

  addToDoItem() {
    if (this.state.info === "") {
      this.setState({ warning: true });
      return;
    }
    this.props.addToDoItems(this.state.info);
    this.setState({ info: "" });
  }

  render() {
    return (
      <div className="add-items">
        <input
          type="text"
          className={
            this.state.warning ? "text-input warning-board" : "text-input"
          }
          value={this.state.info}
          onChange={this.handleInputChange}
          onKeyPress={this.keyPressed}></input>
        <input
          type="button"
          value="Add"
          className="add-btn"
          onClick={this.addToDoItem}></input>
        <span className="space"></span>
      </div>
    );
  }
}

export default AddItems;
