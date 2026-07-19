function StudySummary({ summary }) {
  //total, visible, favorite

  return (
    <summary>
      <p>전체 학습 항목 수: {summary.total}개</p>
      <p>표시된 항목 수: {summary.visible}개</p>
      <p>즐겨찾기된 항목 수: {summary.favorite}개</p>
    </summary>
  );
}

export default StudySummary;
