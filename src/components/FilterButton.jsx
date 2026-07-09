function FilterButton({ value, setCategory, selected, children }) {
  const isSelected = value === selected;

  return (
    <button className={isSelected ? "active" : ""} type="button" onClick={() => setCategory(value)}>
      {children}
    </button>
  );
}

export default FilterButton;
