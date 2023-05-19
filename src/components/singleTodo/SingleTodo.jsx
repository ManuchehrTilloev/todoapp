import "./singleTodo.style.css";
import React from "react";

function SingleTodo(props) {
  return (
    <div className="singletodo-box">
      <h1>{props.todoList}</h1>
      <button>DELETE</button>
    </div>
  );
}

export default SingleTodo;
