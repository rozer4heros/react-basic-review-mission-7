import reactData from "./data/data.json";
// { id, title, desc, category, level }

import "./App.css";

import StudyList from "./components/StudyList";

function App() {
  return (
    <>
      <h1>react basic review mission 2</h1>
      <p>전체 학습 항목 수: {reactData.length}개</p>
      <StudyList items={reactData} />
    </>
  );
}

export default App;
