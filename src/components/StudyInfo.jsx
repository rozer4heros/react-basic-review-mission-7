function StudyInfo({ data }) {
  return (
    <>
      <h3>
        {data.id}. {data.title}
      </h3>
      <p>{data.desc}</p>
      <p>분류: {data.category}</p>
    </>
  );
}

export default StudyInfo;
