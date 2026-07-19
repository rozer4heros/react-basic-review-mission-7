function SearchForm({ ref, keyword, setKeyword, prev }) {
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
      <p>이전 검색어: {prev}</p>
    </>
  );
}

export default SearchForm;
