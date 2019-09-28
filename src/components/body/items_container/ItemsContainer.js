import React from "react";
import "./ItemsContainer.css";
import Item from "./Item";

class ItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        name: "Learning Java",
        isChecked: false
      },
      {
        id: 2,
        name: "Learning JavaScript",
        isChecked: false
      },
      {
        id: 3,
        name: "Learning Node",
        isChecked: true
      }
    ];
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.map((item) => {
            return <Item item={item}></Item>;
          })}
        </ol>
      </div>
    );
  }
}

export default ItemsContainer;
