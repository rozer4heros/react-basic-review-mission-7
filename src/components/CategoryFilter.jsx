import FilterButton from "./FilterButton";

function CategoryFilter({ category, setCategory }) {
  return (
    <>
      <h2>카테고리 필터</h2>
      <div>
        <FilterButton value="all" setValue={setCategory} selected={category}>
          전체
        </FilterButton>
        <FilterButton value="concept" setValue={setCategory} selected={category}>
          concept
        </FilterButton>
        <FilterButton value="library" setValue={setCategory} selected={category}>
          library
        </FilterButton>
        <FilterButton value="hook" setValue={setCategory} selected={category}>
          hook
        </FilterButton>
      </div>
    </>
  );
}

export default CategoryFilter;
