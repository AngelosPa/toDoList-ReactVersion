import { useState } from "react";

function Hallo(props) {
  return <div> Hey, dear {props.userName}</div>;
}
function Task(props) {
  return (
    <div>
      <p>your tasks are today:</p>
      <p>{props.taskName}</p>
    </div>
  );
}

function Liker() {
  const [clicks, setClicks] = useState(0);
  function increment() {
    setClicks(clicks + 1);
  }
  function decrement() {
    setClicks((prevState) => prevState - 1);
  }
  return (
    <div>
      You have {clicks} tasks!
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

//export default Text;
export { Task, Hallo, Liker }; //for more than one use {}
