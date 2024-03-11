import styles from './index.module.css';

const IndexBottom = () => {
  return (
    <div className={styles.indexBottom}>
      <div>
        <img src="images/img_02.png" />
      </div>
      <div>
        <span className={styles.indexPoint}>Point. 02</span>
        <strong>서로에게 이모지로 감정을 표현해보세요</strong>
        <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
      </div>
    </div>
  );
};

export default IndexBottom;
