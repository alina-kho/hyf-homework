import { Border } from "./Border";
import { useState } from "react";

export const ToDoItem = (props) => {
  const [editState, setEditState] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleEditing = () => {
    setEditState(true);
  };

  const finishEditing = (e) => {
    props.updateDescription(e, updatedDescription);
    setEditState(false);
  };

  const handleEditInput = (e) => {
    setUpdatedDescription(e.target.value);
  };

  function changeTaskStatus(e) {
    if (e.target.checked === true) {
      e.target.previousElementSibling.className = "done";
    } else {
      e.target.previousElementSibling.className = "notDone";
    }
  }

  return (
    <Border>
      <li className="toDoItem" key={props.todo.id} id={props.todo.id}>
        {editState ? (
          <>
            <input
              type="text"
              value={updatedDescription}
              onChange={handleEditInput}
            ></input>
          </>
        ) : (
          <p className="notDone">
            {props.todo.description} | {props.todo.deadline}
          </p>
        )}
        <input type="checkbox" onChange={changeTaskStatus}></input>

        <button onClick={props.deleteTodo}>Delete</button>
        {editState ? (
          <button onClick={finishEditing}>Update</button>
        ) : (
          <button onClick={handleEditing}>Edit</button>
        )}
      </li>
    </Border>
  );
};
