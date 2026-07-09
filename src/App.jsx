import { useState } from "react";

import reactData from "./data/data.json";
// { id, title, desc, category, level }

import "./App.css";
import StudyList from "./components/StudyList";
import FilterButton from "./components/FilterButton";

function App() {
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  const filterCategory = (item) => {
    if (category === "all") return true;
    if (item.category === category) return true;

    return false;
  };
  const filterKeyword = (item) => {
    if (item.title.includes(keyword)) return true;

    return false;
  };

  return (
    <>
      <h1>react basic review mission 7</h1>
      <p>전체 학습 항목 수: {reactData.length}개</p>
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
      <h2>검색</h2>
      <input type="text" placeholder="키워드 입력" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <StudyList items={reactData.filter((i) => filterCategory(i)).filter((i) => filterKeyword(i))} />
    </>
  );
}

export default App;
