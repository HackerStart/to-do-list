import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  render() {
    return (
      <div className="add-items">
        <input type="text" className="text-input"></input>
        <input type="button" value="Add" className="add-btn"></input>
        <span className="space"></span>
      </div>
    );
  }
}

export default AddItems;
