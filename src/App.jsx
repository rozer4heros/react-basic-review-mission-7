import { useState } from "react";

import reactData from "./data/data.json";
// { id, title, desc, category, level }

import "./App.css";
import StudyList from "./components/StudyList";
import FilterButton from "./components/FilterButton";

function App() {
  const [category, setCategory] = useState("all");

  const handleFilter = (item) => {
    if (category === "all") return true;
    if (item.category === category) return true;

    return false;
  };

  return (
    <>
      <h1>react basic review mission 2</h1>
      <p>전체 학습 항목 수: {reactData.length}개</p>
      <h2>카테고리 필터</h2>
      <div>
        <FilterButton value="all" setCategory={setCategory}>
          전체
        </FilterButton>
        <FilterButton value="concept" setCategory={setCategory}>
          concept
        </FilterButton>
        <FilterButton value="library" setCategory={setCategory}>
          library
        </FilterButton>
        <FilterButton value="hook" setCategory={setCategory}>
          hook
        </FilterButton>
      </div>
      <h2>검색</h2>
      <input type="text" />
      <StudyList items={reactData.filter((i) => handleFilter(i))} />
    </>
  );
}

export default App;
