import todos from "../data/todos";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  return (
    <div className="toDoList">
      <ul>
        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todos.indexOf(todo) + 1}
              description={todo.description}
              deadline={todo.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}
