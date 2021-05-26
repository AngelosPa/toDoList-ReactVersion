import { Task, Hallo, Liker } from "./components/tasks/Task.js";
import "./scss/Main.scss";

//useful functions and our arrs
function ftiaxetoSubmit(e) {
  e.preventDefault();
}
function newTask() {
  console.log("IT  WORKS");

  return (
    <div className="whereareyou">
      <p>rthrthDTESHERTHYHJrtyh</p>
      <Hallo userName={names[1]} />
      )(
      <Task taskName="skata" />
    </div>
  );
}

const names = ["Zain", "Olga", "Nancy"];
const listItems = names.map((name, i) => <li key={i}>{name}</li>);
function App() {
  return (
    <div className="maincontainer">
      <h1> to do list</h1>
      <Liker />
      <h2>
        {`${new Date().getDate()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`}
      </h2>
      <aside>
        <p>choose who you are:</p>
        <ul>{listItems}</ul>
      </aside>
      <form onSubmit={ftiaxetoSubmit}>
        <input type="text" placeholder="write your task" />
        <input type="submit" onClick={newTask} />
        <div></div>
      </form>
    </div>
  );
}

export default App;
