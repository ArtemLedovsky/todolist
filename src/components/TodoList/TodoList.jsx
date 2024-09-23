import Todo from "../Todo/Todo";
import s from "./TodoList.module.css";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className={s.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            title={todo.title}
            dscr={todo.text}
            id={todo.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
