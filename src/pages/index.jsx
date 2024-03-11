import ButtonPrimary56 from '../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import Header from '../components/header/header';
import IndexBottom from '../components/main/indexBottom';
import IndexTop from '../components/main/indexTop';
import styles from '../components/main/index.module.css';

const Index = () => {
  return (
    <>
      <Header button={true} />
      <div className={styles.indexContents}>
        <IndexTop />
        <IndexBottom />
      </div>
      <div className={styles.linkButtonCon}>
        <ButtonPrimary56 linkName={'/list'} buttonName="구경해보기" />
      </div>
    </>
  );
};

export default Index;
