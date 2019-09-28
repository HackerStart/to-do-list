import React from "react";
import "./Body.css";
import AddItems from "./add_items/AddItems";

class Body extends React.Component {
  render() {
    return (
      <div>
        <AddItems></AddItems>
      </div>
    );
  }
}

export default Body;
