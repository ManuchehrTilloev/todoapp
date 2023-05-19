import "./todoApp.style.css";
import SingleTodo from "../../singleTodo/SingleTodo";
import TodoInput from "../../todoinput/TodoInput";
import React, { useState } from "react";

const defaultTodoList = [];

function TodoApp() {
  const [todoList, setTodoList] = useState(defaultTodoList);

  const addTodoHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1>Todo App</h1>
        <TodoInput addTodoHandler={addTodoHandler} />
        <div className="todo-list"></div>
        <h1>Your todos :</h1>
        {todoList.map((el, index) => {
          return <SingleTodo todoList={el} key={index} />;
        })}
        {!todoList.length && <p className="note-text">Todo list is empty</p>}
      </div>
    </div>
  );
}

export default TodoApp;
