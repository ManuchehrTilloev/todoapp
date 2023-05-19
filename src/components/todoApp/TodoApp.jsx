import "./todoApp.style.css";
import SingleTodo from "../singleTodo/SingleTodo";
import TodoInput from "../todoinput/TodoInput";
import React from "react";

function TodoApp() {
  return (
    <div className="todo-conatiner">
      <TodoInput />
      <h1>Your todos :</h1>
      <SingleTodo />
    </div>
  );
}

export default TodoApp;
