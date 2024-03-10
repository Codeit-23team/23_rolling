import './index.css';

const IndexTop = () => {
  return (
    <div className="indexTop">
      <div>
        <span className="indexPoint">Point. 01</span>
        <strong>
          누구나 손쉽게, 온라인
          <em>
            줄바꿈
            <br />
          </em>{' '}
          롤링 페이퍼를 만들 수 있어요
        </strong>
        <p>로그인 없이 자유롭게 만들어요.</p>
      </div>
      <div>
        <img src="images/img_01.png" />
        <img className="mbImg" src="images/img_01_01.png" />
      </div>
    </div>
  );
};

export default IndexTop;
