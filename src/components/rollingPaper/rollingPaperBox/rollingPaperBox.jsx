import './rollingPaperBox.css';

function RollingPaperBox() {
  return (
    <div className="rollingPaperBox">
      <div className="rollingPaperInfo">
        <div>To. 이름</div>
        <div>(api쪽 result의 messageCount)만큼 프로필 </div>
        <div>(api쪽 result의 messageCount) 명이 작성했어요!</div>
      </div>
      <div className="rollingPaperIcon">이모티콘 있다 count로 올리고 하는 것 같다</div>
    </div>
  );
}

export default RollingPaperBox;
