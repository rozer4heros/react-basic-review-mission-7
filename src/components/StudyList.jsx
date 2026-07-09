import StudyInfo from "./StudyInfo";

function StudyList({ items }) {
  // { id, title, desc, category, level }
  const list = items.map((i) => <StudyInfo key={i.id} data={i} />);

  return (
    <>
      <>{list}</>
    </>
  );
}

export default StudyList;
