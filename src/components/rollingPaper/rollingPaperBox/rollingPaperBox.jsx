import './rollingPaperBox.css';

function RollingPaperBox({ name, backgroundColor, reactionCount, topReactions }) {
  return (
    <div
      className="rollingPaperBox"
      style={{
        background: `var(--${backgroundColor === 'beige' ? 'orange' : backgroundColor}200)`,
      }}
    >
      <div className="rollingPaperInfo">
        <div>To. {name}</div>
        {/* 나은님 컴포넌트 작성하셨음 ! */}
        <div>...만큼 프로필 </div>
        <div>{reactionCount}명이 작성했어요!</div>
      </div>
      {/* 나은님 컴포넌트 작성하셨음 ! */}
      <div>{topReactions?.map((data) => data.emoji + data.count)}</div>
    </div>
  );
}

export default RollingPaperBox;
