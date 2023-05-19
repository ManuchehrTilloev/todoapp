import "./todoInput.style.css";
import React, { useState } from "react";

function TodoInput(props) {
  const [currentTodo, setCurrentTodo] = useState("");
  const onChangeHandler = (e) => {
    setCurrentTodo(e.target.value);
  };
  const onClickHandler = () => {
    props.addTodoHandler(currentTodo);
    setCurrentTodo("");
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={currentTodo} />
      <button onClick={onClickHandler}>ADD</button>
    </div>
  );
}

export default TodoInput;
