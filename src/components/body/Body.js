import React from "react";
import "./Body.css";
import AddItems from "./add_items/AddItems";
import ItemsContainer from "./items_container/ItemsContainer";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: []
    };
    this.addToDoItems = this.addToDoItems.bind(this);
    this.handleItemsState = this.handleItemsState.bind(this);
    this.changeItemsText = this.changeItemsText.bind(this);
  }

  filterTodoItems(condition) {
    switch (condition) {
      case "Active":
        this.setState((state) => {
          return {
            filteredItems: state.items.filter((item) => !item.isChecked)
          };
        });
        break;
      case "Completed":
        this.setState((state) => {
          return {
            filteredItems: state.items.filter((item) => item.isChecked)
          };
        });
        break;
      case "All":
      default:
        this.setState({
          filteredItems: this.state.items
        });
        break;
    }
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
        items: items,
        filteredItems: items
      };
    });
  }

  handleItemsState(id, isChecked) {
    this.setState((state) => {
      const items = state.items.map((item) => {
        if (item.id === id) {
          item.isChecked = isChecked;
        }
        return item;
      });
      return {
        items
      };
    });
  }

  changeItemsText(id, text) {
    this.setState((state) => {
      const items = state.items.map((item) => {
        if (item.id === id) {
          item.name = text;
        }
        return item;
      });
      return {
        items
      };
    });
  }

  render() {
    return (
      <div>
        <AddItems addToDoItems={this.addToDoItems}></AddItems>
        <ItemsContainer
          todoItems={this.state.filteredItems}
          handleItemsState={this.handleItemsState}
          changeItemsText={this.changeItemsText}></ItemsContainer>
      </div>
    );
  }
}

export default Body;
