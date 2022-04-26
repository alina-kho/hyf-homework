import "./App.css";
import ToDoList from "./components/toDoList";

/* Components are highlighted in CSS - App, ToDoList, ToDoItem.
I made a ToDoList a child of App meaning that some more features (e.g. input) will be added.
ToDoList components only servers to render todos*/

function App() {
  return (
    <div className="App">
      <h1>To-Do List By Alina</h1>
      <ToDoList />
    </div>
  );
}

export default App;
