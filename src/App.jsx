import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import reactData from "./data/data.json";
// { id, title, desc, category, level }

import "./App.css";
import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import LevelFilter from "./components/LevelFilter";
import StudySummary from "./components/StudySummary";
import StudyList from "./components/StudyList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const searchInputRef = useRef(null);
  const prevKeyword = useRef("");
  const renderCount = useRef(0);
  renderCount.current += 1;

  const filteredData = useMemo(
    () =>
      reactData
        .filter((i) => filterKeyword(i))
        .filter((i) => filterCategory(i))
        .filter((i) => filterLevel(i))
        .filter((i) => filterFavorite(i)),
    [keyword, category, level, favoriteOnly, favoriteIds],
  );
  const summary = useMemo(
    () => ({
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    }),
    [filteredData, favoriteIds],
  );

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  function filterCategory(item) {
    if (category === "all") return true;
    return item.category === category;
  }
  function filterLevel(item) {
    if (level === "all") return true;
    return item.level === level;
  }
  function filterKeyword(item) {
    return item.title.toLowerCase().includes(keyword.toLowerCase());
  }
  function filterFavorite(item) {
    if (!favoriteOnly) return true;
    return favoriteIds.includes(item.id);
  }

  const onSelect = useCallback(
    (id) => {
      if (id === selectedId) {
        setSelectedId(null);
        return;
      }
      setSelectedId(id);
    },
    [selectedId],
  );
  const handleToggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);
  const handleKeyword = (value) => {
    prevKeyword.current = keyword;
    setKeyword(value);
  };
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };
  const handleReset = () => {
    setKeyword("");
    setCategory("all");
    setLevel("all");
    setFavoriteOnly(false);
    searchInputRef.current.focus();
  };

  return (
    <>
      <div className="sticky">
        <button type="button" onClick={handleFocusSearch}>
          검색창으로 이동
        </button>
      </div>
      <h1>react basic review mission 8</h1>
      <SearchForm ref={searchInputRef} keyword={keyword} setKeyword={handleKeyword} prev={prevKeyword.current} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <LevelFilter level={level} setLevel={setLevel} />
      <StudySummary summary={summary} />
      <p>App 렌더링 횟수: {renderCount.current}</p>
      <div>
        <button type="button" className={favoriteOnly ? "active" : ""} onClick={() => setFavoriteOnly((prev) => !prev)}>
          즐겨찾기만 보기
        </button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
      </div>
      <StudyList
        items={filteredData}
        onSelect={onSelect}
        selectedId={selectedId}
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
      />
      {filteredData.length === 0 && <p>조건에 맞는 학습 항목이 없습니다.</p>}
    </>
  );
}

export default App;
