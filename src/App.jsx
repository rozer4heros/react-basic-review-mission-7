import { useState, useMemo } from "react";

import reactData from "./data/data.json";
// { id, title, desc, category, level }

import "./App.css";
import StudySummary from "./components/StudySummary";
import StudyList from "./components/StudyList";
import CategoryFilter from "./components/CategoryFilter";
import SearchForm from "./components/SearchForm";

function App() {
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredData = useMemo(
    () =>
      reactData
        .filter((i) => filterCategory(i))
        .filter((i) => filterKeyword(i))
        .filter((i) => filterFavorite(i)),
    [keyword, category, favoriteOnly, favoriteIds],
  );
  const summary = useMemo(
    () => ({
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    }),
    [filteredData, favoriteIds],
  );

  function filterCategory(item) {
    if (category === "all") return true;
    return item.category === category;
  }
  function filterKeyword(item) {
    return item.title.toLowerCase().includes(keyword.toLowerCase());
  }
  function filterFavorite(item) {
    if (!favoriteOnly) return true;
    return favoriteIds.includes(item.id);
  }

  const onSelect = (id) => {
    if (id === selectedId) {
      setSelectedId(null);
      return;
    }
    setSelectedId(id);
  };

  const handleFavorite = (id) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <>
      <h1>react basic review mission 7</h1>
      <StudySummary summary={summary} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <SearchForm keyword={keyword} setKeyword={setKeyword} />
      <div>
        <button type="button" className={favoriteOnly ? "active" : ""} onClick={() => setFavoriteOnly((prev) => !prev)}>
          즐겨찾기만 보기
        </button>
      </div>
      <StudyList
        items={filteredData}
        onSelect={onSelect}
        selectedId={selectedId}
        favoriteIds={favoriteIds}
        handleFavorite={handleFavorite}
      />
    </>
  );
}

export default App;
