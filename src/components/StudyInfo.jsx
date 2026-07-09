function StudyInfo({ data, onSelect, selectedId }) {
  const isSelected = data.id === selectedId;

  return (
    <article className={isSelected ? "active" : ""} onClick={() => onSelect(data.id)}>
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
    </article>
  );
}

export default StudyInfo;
