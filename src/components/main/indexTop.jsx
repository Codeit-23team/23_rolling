import styles from './index.module.css';

const IndexTop = () => {
  return (
    <div className={styles.indexTop}>
      <div>
        <span className={styles.indexPoint}>Point. 01</span>
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
        <img
          src="images/img_01.png"
          alt="from. 강미나, 관계: 친구, 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!, 2023.07.08/from. 박대영, 관계: 동료, 일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋을 것 같아요...., 2023.07.08"
        />
        <img
          className={styles.mbImg}
          src="images/img_01_01.png"
          alt="from. 강미나, 관계: 친구, 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!, 2023.07.08/from. 박대영, 관계: 동료, 일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋을 것 같아요...., 2023.07.08"
        />
      </div>
    </div>
  );
};

export default IndexTop;
