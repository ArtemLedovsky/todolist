const SearchBox = ({ value, onFilter, onClear }) => {
  return (
    <label>
      <span>Find Todo by title</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
      {value ? <button onClick={onClear}>Clear</button> : ""}
    </label>
  );
};

export default SearchBox;
