import styles from "./Task.module.css";

function Task(props) {
  const userTask = props.list.map((toDo, i) => (
    <li key={i} className={toDo.done ? styles.opaci : null}>
      <div> Hey, dear (ur name)</div>
      <div>
        <p>your tasks are today:{toDo.title}</p>
      </div>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      <input className="gms" placeholder="write notes" />
      <i
        onClick={() => {
          // console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        delete 🗑
      </i>
    </li>
  ));

  return <ul>{userTask}</ul>;
}
export default Task;
// function Liker() {
//   const [clicks, setClicks] = useState(0);
//   function increment() {
//     setClicks(clicks + 1);
//   }
//   function decrement() {
//     setClicks((prevState) => prevState - 1);
//   }
//   return (
//     <div>
//       You have {clicks} tasks!
//       <br />
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

//export { newTask,blabla }; //for more than one use {}
