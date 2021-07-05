import React, { useState } from "react";

import "./scss/Main.scss";
import Footer from "./components/tasks/Footer";
import Header from "./components/tasks/Header";
import List from "./components/tasks/List";
import Task from "./components/tasks/Task";

//we import the useState for our hook and the fragment to solve the many nested divs problem (fragm.. is a wrapper who dont affect the styles)
import { Fragment } from "react";

//const names = ["Zain", "Olga", "Nancy"];
// const listItems = names.map((name, i) => <li key={i}>{name}</li>);
//its good to make the app our parent component
function App() {
  //lets initialise our hook with an empty []

  //we create setList here in the app , we will take care of our updates in our List.js and we manipulate it (delete check or whatever else in Task.js)
  const [list, setList] = useState([]);

  const remove = (itemToRemove) => {
    // itemToRemove has the id for that specific item
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };
  const check = (itemToCheck) => {
    // itemToCheck has the id for that specific item
    console.log(itemToCheck);
    const newArr = list.filter((item) => {
      if (item.id === itemToCheck) {
        // revers done
        item.done = !item.done;
      }
      return item;
    });
    setList(newArr);
  };
  // React Fragments allow you to wrap multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  return (
    <Fragment>
      <div className="maincontainer">
        <Header />
        <List setList={setList} />
        {/* list={list} to define the map that we create in our Task function remove and check -->look above
         */}
        <Task list={list} remove={remove} check={check} />
      </div>
      <div className="foot">
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
