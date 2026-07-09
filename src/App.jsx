import reactData from "./data/data.json";
// { id, title, desc, category, level }

import StudyInfo from "./components/StudyInfo";

function App() {
  console.log(reactData);

  return (
    <>
      <h1>react basic review mission 2</h1>
      <p>전체 학습 항목 수: {reactData.length}개</p>
      <h2>첫 번째 데이터 출력</h2>
      <StudyInfo title={reactData[0].title} desc={reactData[0].desc} category={reactData[0].category} />
    </>
  );
}

export default App;
