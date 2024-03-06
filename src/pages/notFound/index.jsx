import Header from '../../components/header/header';
import ButtonSecondary40 from '../../components/button/buttonSecondary/buttonSecondary40';
import styles from './index.module.css';

const NotFoundPage = () => {
  return (
    <>
      <Header button={true} />
      <div className={styles.notFound}>
        <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
        <p>입력하신 주소가 올바른지 다시 한 번 확인해주세요.</p>
        <ButtonSecondary40 buttonName="홈으로 돌아가기" />
      </div>
    </>
  );
};

export default NotFoundPage;
