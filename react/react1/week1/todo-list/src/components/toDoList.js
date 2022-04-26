import todos from "../data/todos";
import ToDoItem from "./toDoItem";

export default function ToDoList() {
  return (
    <div className="toDoList">
      <ul>
        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              description={todo.description}
              deadline={todo.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}
