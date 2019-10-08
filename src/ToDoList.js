import React from "react";
import "./ToDoList.css";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Footer from "./components/footer/Footer.js";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.body = React.createRef();
    this.filterTodoItems = this.filterTodoItems.bind(this);
  }
  filterTodoItems(condition) {
    this.body.current.filterTodoItems(condition);
  }
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Body ref={this.body}></Body>
        <Footer filterTodoItems={this.filterTodoItems}></Footer>
      </div>
    );
  }
}

export default ToDoList;
