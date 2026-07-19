function SearchForm({ ref, keyword, setKeyword }) {
  return (
    <>
      <h2>검색</h2>
      <input
        ref={ref}
        type="text"
        name="search"
        placeholder="키워드 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </>
  );
}

export default SearchForm;
