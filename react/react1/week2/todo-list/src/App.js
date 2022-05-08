import ToDoList from "./components/ToDoList";
import { Timer } from "./components/Timer";
import todos from "./data/todos";
import { useState } from "react";
import "./App.css";

const newTodosArray = [
  "Do laundry",
  "Study React",
  "Build projects",
  "Feed the dog",
  "Send an e-mail",
  "Edit CV",
  "Do grocery shopping",
  "Go to bed early",
];

const ids = [1, 2, 3];

function App() {
  const [toDoList, setTodos] = useState(todos);

  const addRandomTodo = () => {
    // console.log(Math.max(toDoList.map((todo) => todo.id)));
    const newToDo = {
      id: ids[ids.length - 1] + 1,
      description:
        newTodosArray[Math.floor(Math.random() * newTodosArray.length)],
    };
    ids.push(newToDo.id);
    setTodos((prevTodos) => {
      return [...prevTodos, newToDo];
    });
  };

  function deleteTodo(e) {
    // console.log(e.target.parentNode.id);
    const todoToDelete = e.target.parentNode.id;
    const newToDos = toDoList.filter(
      (todo) => todo.id !== parseInt(todoToDelete)
    );
    // console.log(newToDos);
    setTodos(newToDos);
  }

  return (
    <div className="App">
      <h1>Todo-List by Alina</h1>
      <Timer />
      <div className="addTodoButton">
        <button onClick={addRandomTodo}>Add a random to-do</button>
      </div>
      <ToDoList toDoList={toDoList} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
