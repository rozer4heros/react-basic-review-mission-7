import { memo, useState } from "react";

import StudyItem from "./StudyItem";

function StudyList({ items, onSelect, selectedId, favoriteIds, onToggleFavorite }) {
  // { id, title, desc, category, level }

  const list = items.map((i) => (
    <StudyItem
      key={i.id}
      item={i}
      onSelect={onSelect}
      selectedId={selectedId}
      favoriteIds={favoriteIds}
      onToggleFavorite={onToggleFavorite}
    />
  ));

  return (
    <>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}

export default memo(StudyList);
