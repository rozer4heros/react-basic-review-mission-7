import { useState } from "react";

import StudyItem from "./StudyItem";

function StudyList({ items, onSelect, selectedId, favoriteIds, handleFavorite }) {
  // { id, title, desc, category, level }

  const list = items.map((i) => (
    <StudyItem
      key={i.id}
      data={i}
      onSelect={onSelect}
      selectedId={selectedId}
      favoriteIds={favoriteIds}
      handleFavorite={handleFavorite}
    />
  ));

  return (
    <>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}

export default StudyList;
