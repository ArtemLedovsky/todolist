import { useEffect, useState } from "react";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";
import s from "./App.module.css";
import SearchBox from "./SearchBox/SearchBox";

const INIT_TODOS = [
  {
    title: "This is an example todo",
    text: "Example todo description",
    id: "example-id",
  },
];

const savedData = JSON.parse(window.localStorage.getItem("saved-todos"));

const App = () => {
  const [todos, setTodos] = useState(() => {
    if (savedData.length > 0) {
      return savedData;
    }
    return INIT_TODOS;
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("saved-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    if (newTodo.title === "") {
      return alert("Enter the Title");
    }
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClearSearch = (e) => {
    e.preventDefault();
    setFilter("");
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>My todo`s</h1>
      <Form onAdd={addTodo} />
      <SearchBox
        value={filter}
        onFilter={setFilter}
        onClear={handleClearSearch}
      />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
