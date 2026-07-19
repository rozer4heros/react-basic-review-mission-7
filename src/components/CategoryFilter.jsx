import FilterButton from "./FilterButton";

function CategoryFilter({ setCategory, category }) {
  return (
    <>
      <h2>카테고리 필터</h2>
      <div>
        <FilterButton value="all" setCategory={setCategory} selected={category}>
          전체
        </FilterButton>
        <FilterButton value="concept" setCategory={setCategory} selected={category}>
          concept
        </FilterButton>
        <FilterButton value="library" setCategory={setCategory} selected={category}>
          library
        </FilterButton>
        <FilterButton value="hook" setCategory={setCategory} selected={category}>
          hook
        </FilterButton>
      </div>
    </>
  );
}

export default CategoryFilter;
