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
        <input type="text" name="title" className={s.titleInput} required />
      </label>
      <label>
        <span>Description</span>
        <textarea type="text" name="dscr" className={s.dscrInput} />
      </label>
      <button type="submit" className={s.addBtn}>
        ADD
      </button>
    </form>
  );
};

export default Form;
