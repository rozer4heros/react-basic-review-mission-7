function FilterButton({ value, setCategory, children }) {
  return (
    <button type="button" onClick={() => setCategory(value)}>
      {children}
    </button>
  );
}

export default FilterButton;
