import { useState } from "react";
const List = (props) => {
  //we initialise the state wth the empty string
  const [userInput, setUserInput] = useState("");
  //dinoume sto state mas keno value ""
  function changeHandle(e) {
    //console.log(e.target.value);
    //WE GOT WHAT HE WRITES
    setUserInput(e.target.value);
  }
  function ftiaxetoSubmit(e) {
    e.preventDefault();
    //this setList is a function which is from react and will take care of updates
    if (userInput.length) {
      //THIS OBJECT IS OUR TODOS COMPONENTS, IF WE WANT TO ADD SOMETHING WE ADD IT HERE
      props.setList((prevState) => [
        ...prevState,
        { id: prevState.length, title: userInput.trim(), done: false },
      ]);
      // console.log(props.id);
      setUserInput("");
    }
  }

  return (
    <form onSubmit={ftiaxetoSubmit}>
      <input
        type="text"
        placeholder="write your task"
        value={userInput}
        onChange={changeHandle}
        // onChange to let him type and get what he writes
      />
      <input type="submit" value="add Task" />
      <div></div>
    </form>
  );
};
export default List;
