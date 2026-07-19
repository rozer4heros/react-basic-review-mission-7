function StudyItem({ data, onSelect, selectedId, favoriteIds, handleFavorite }) {
  const isSelected = data.id === selectedId;

  return (
    <article
      className={isSelected ? "active" : ""}
      onClick={(e) => {
        onSelect(data.id);
      }}
    >
      <h3>
        {data.id}. {data.title}
      </h3>
      <p>{data.desc}</p>
      <p>분류: {data.category}</p>
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
          handleFavorite(data.id);
        }}
      >
        {favoriteIds.includes(data.id) ? "☆ 즐겨찾기 해제" : "★ 즐겨찾기"}
      </button>
      <b>{favoriteIds.includes(data.id) && "★"}</b>
    </article>
  );
}

export default StudyItem;
