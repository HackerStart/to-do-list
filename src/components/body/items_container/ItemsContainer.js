import React from "react";
import "./ItemsContainer.css";
import Item from "./Item";

class ItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.todoItems.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                setItemsState={this.props.handleItemsState}></Item>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ItemsContainer;
