import "./singleTodo.style.css";

export function SingleTodo(props) {
  return (
    <div className="singletodo-box">
      <h1>{props.todoList}</h1>
      <button>DELETE</button>
    </div>
  );
}
