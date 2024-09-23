import s from "./Form.module.css";
const Form = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      title: e.target.elements.title.value,
      text: e.target.elements.dscr.value,
    });
    e.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <span>Title</span>
        <input type="text" name="title" />
      </label>
      <label>
        <span>Description</span>
        <input type="text" name="dscr" />
      </label>
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
