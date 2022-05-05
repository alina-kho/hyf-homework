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

function App() {
  const [toDoList, setTodos] = useState(todos);

  const addRandomTodo = () => {
    const newToDo = {
      id: toDoList.length + 1,
      description:
        newTodosArray[Math.floor(Math.random() * newTodosArray.length)],
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newToDo];
    });
  };

  function deleteTodo(e) {
    console.log(e.target.parentNode.id);
    const todoToDelete = toDoList[e.target.parentNode.id - 1];
    const newToDos = toDoList.filter((todo) => todo.id !== todoToDelete.id);
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
