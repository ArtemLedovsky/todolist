import s from "./Todo.module.css";

const Todo = ({ title, dscr, id, onDelete }) => {
  return (
    <div className={s.item}>
      <div className={s.itemWrapper}>
        <h2>{title}</h2>
        <p>{dscr}</p>
      </div>
      <button className={s.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
