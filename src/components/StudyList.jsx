import { useState } from "react";

import StudyInfo from "./StudyInfo";

function StudyList({ items }) {
  // { id, title, desc, category, level }
  const [selectedId, setSelectedId] = useState(null);

  const onSelect = (id) => {
    setSelectedId(id);
    console.log(id, typeof id);
  };

  const list = items.map((i) => <StudyInfo key={i.id} data={i} onSelect={onSelect} selectedId={selectedId} />);

  return (
    <>
      <h2>학습 목록</h2>
      {list}
    </>
  );
}

export default StudyList;
