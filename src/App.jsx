import reactData from "./data/data.json";

function App() {
  console.log(reactData);

  return (
    <>
      <h1>react basic review mission 2</h1>
      <p>전체 학습 항목 수: {reactData.length}개</p>
    </>
  );
}

export default App;
