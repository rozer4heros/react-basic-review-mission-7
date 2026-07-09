function StudyInfo({ title, desc, category }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>분류: {category}</p>
    </>
  );
}

export default StudyInfo;
