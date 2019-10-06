import React from "react";
import "./Body.css";
import AddItems from "./add_items/AddItems";
import ItemsContainer from "./items_container/ItemsContainer";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addToDoItems = this.addToDoItems.bind(this);
  }

  addToDoItems(info) {
    this.setState((state) => {
      const items = state.items.concat([
        {
          id: state.items.length + 1,
          name: info,
          isChecked: false
        }
      ]);
      return {
        items
      };
    });
  }

  render() {
    return (
      <div>
        <AddItems addToDoItems={this.addToDoItems}></AddItems>
        <ItemsContainer todoItems={this.state.items}></ItemsContainer>
      </div>
    );
  }
}

export default Body;
