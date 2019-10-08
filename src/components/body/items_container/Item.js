import React from "react";
import "./ItemsContainer.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.item.isChecked,
      isReadOnly: true,
      text: this.props.item.name
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.setItemsTextStyle = this.setItemsTextStyle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  handleChecked(event) {
    this.setState({
      isChecked: event.target.checked
    });
    this.props.setItemsState(this.props.item.id, event.target.checked);
  }

  setItemsTextStyle() {
    this.setState({
      isReadOnly: false
    });
  }

  changeText(event) {
    this.setState({
      text: event.target.value
    });
  }

  keyPressed(event) {
    if (event.key === "Enter") {
      this.props.changeItemsText(this.props.item.id, event.target.value);
      this.setState({ isReadOnly: true });
    }
  }

  render() {
    return (
      <li id="this.props.id" className={this.state.isChecked ? "checked" : ""}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          className="checkbox"
          onChange={this.handleChecked}></input>
        <input
          type="text"
          className={
            this.state.isChecked ? "completed input-text" : "input-text"
          }
          readOnly={this.state.isReadOnly}
          value={this.state.text}
          onChange={this.changeText}
          onDoubleClick={this.setItemsTextStyle}
          onKeyPress={this.keyPressed}></input>
      </li>
    );
  }
}

export default Item;
