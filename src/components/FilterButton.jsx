function FilterButton({ value, setValue, selected, children }) {
  const isSelected = value === selected;

  return (
    <button className={isSelected ? "active" : ""} type="button" onClick={() => setValue(value)}>
      {children}
    </button>
  );
}

export default FilterButton;
