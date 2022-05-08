export const ToDoItem = (props) => {
  function changeTaskStatus(e) {
    if (e.target.checked === true) {
      e.target.previousElementSibling.className = "done";
    } else {
      e.target.previousElementSibling.className = "notDone";
    }
  }

  return (
    <li className="toDoItem" key={props.todo.id} id={props.todo.id}>
      <label className="notDone">{props.todo.description}</label>
      <input type="checkbox" onChange={changeTaskStatus}></input>
      <button onClick={props.deleteTodo}>Delete</button>
    </li>
  );
};
