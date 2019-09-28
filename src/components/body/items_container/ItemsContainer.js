import React from "react";
import "./ItemsContainer.css";

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
            return (
              <li className={item.isChecked ? "checked" : ""}>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  className="checkbox"></input>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ItemsContainer;
