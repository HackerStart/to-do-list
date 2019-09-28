import React from "react";
import "./Body.css";
import AddItems from "./add_items/AddItems";
import ItemsContainer from "./items_container/ItemsContainer";

class Body extends React.Component {
  render() {
    return (
      <div>
        <AddItems></AddItems>
        <ItemsContainer></ItemsContainer>
      </div>
    );
  }
}

export default Body;
