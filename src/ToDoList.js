import React from "react";
import "./ToDoList.css";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Footer from "./components/footer/Footer.js";

function ToDoList() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default ToDoList;
