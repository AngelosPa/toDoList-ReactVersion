import React, { useState } from "react";
import newTask from "./components/tasks/Task.js";
import "./scss/Main.scss";
import Footer from "./components/tasks/Footer";
import Header from "./components/tasks/Header";
import List from "./components/tasks/List";

//we import the useState for our hook and the fragment to solve the many nested divs problem (fragm.. is a wrapper who dont affect the styles)
import { Fragment } from "react";
//useful functions and our arrs
function ftiaxetoSubmit(e) {
  e.preventDefault();
}

//const names = ["Zain", "Olga", "Nancy"];
// const listItems = names.map((name, i) => <li key={i}>{name}</li>);
function App() {
  return (
    <Fragment>
      <div className="maincontainer">
        <Header />

        <Footer />

        <form onSubmit={ftiaxetoSubmit}>
          <input type="text" placeholder="write your task" />
          <input type="submit" />
          <div></div>
        </form>
      </div>
    </Fragment>
  );
}

export default App;
