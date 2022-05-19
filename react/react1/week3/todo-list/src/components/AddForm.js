import { useState } from "react";
import uniqid from "uniqid";

export const AddForm = ({ todos, setTodos }) => {
  //Defining states for the input fields
  const [inputDescription, setDescription] = useState("");
  const [inputDeadline, setDeadline] = useState("");

  const addHandler = () => {
    const newTodo = {
      id: uniqid(),
      description: inputDescription,
      deadline: inputDeadline,
    };

    //We should do a bit of validation first not to get an empty todo
    if (newTodo.description !== "" && newTodo.deadline !== null) {
      const today = new Date();
      const deadline = new Date(newTodo.deadline);
      if (deadline < today) {
        alert(
          "Oops, looks like the deadline has already passed. Please change it to either today or later!"
        );
      } else {
        setTodos(todos.concat(newTodo));
      }
    } else {
      alert("You should assign both a description and a deadline");
    }

    console.log(newTodo.id);

    // Reset input values
    setDescription("");
    document.getElementById("descriptionInput").value = "";
    setDeadline("");
  };

  return (
    <div className="addBar">
      <label>Description </label>
      <input
        id="descriptionInput"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <label>Deadline </label>
      <input
        id="dealineInput"
        type="date"
        onChange={(e) => {
          setDeadline(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={addHandler}>Add New Todo</button>
    </div>
  );
};
