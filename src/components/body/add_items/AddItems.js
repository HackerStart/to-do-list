import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ info: event.target.value });
  }

  render() {
    return (
      <div className="add-items">
        <input
          type="text"
          className="text-input"
          value={this.state.info}
          onChange={this.handleInputChange}></input>
        <input
          type="button"
          value="Add"
          className="add-btn"
          onClick={(e) => this.props.addToDoItems(this.state.info, e)}></input>
        <span className="space"></span>
      </div>
    );
  }
}

export default AddItems;
