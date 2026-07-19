import FilterButton from "./FilterButton";

function LevelFilter({ level, setLevel }) {
  return (
    <>
      <h2>난이도 필터</h2>
      <div>
        <FilterButton value="all" setValue={setLevel} selected={level}>
          전체
        </FilterButton>
        <FilterButton value="basic" setValue={setLevel} selected={level}>
          basic
        </FilterButton>
        <FilterButton value="intermediate" setValue={setLevel} selected={level}>
          intermediate
        </FilterButton>
      </div>
    </>
  );
}

export default LevelFilter;
