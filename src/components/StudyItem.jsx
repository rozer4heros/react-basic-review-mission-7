import { memo } from "react";

function StudyItem({ item, onSelect, selectedId, favoriteIds, onToggleFavorite }) {
  console.log(`Rendered ${item.title}`);

  const isSelected = item.id === selectedId;

  return (
    <article
      className={isSelected ? "active" : ""}
      onClick={(e) => {
        onSelect(item.id);
      }}
    >
      <h3>
        {item.id}. {item.title}
      </h3>
      <p>{item.desc}</p>
      <p>분류: {item.category}</p>
      {isSelected ? (
        <p>
          <strong>선택된 항목입니다.</strong>
        </p>
      ) : (
        <></>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(item.id);
        }}
      >
        {favoriteIds.includes(item.id) ? "☆ 즐겨찾기 해제" : "★ 즐겨찾기"}
      </button>
      <b>{favoriteIds.includes(item.id) && "★"}</b>
    </article>
  );
}

export default memo(StudyItem);
