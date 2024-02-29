import Header from '../../components/header/header';
import RollingPaperList from '../../components/rollingPaper/rollingPaperList/rollingPaperList';
import ButtonPrimary56 from '../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import './index.css';

function ListPage() {
  return (
    <>
      <Header button={true} />
      <RollingPaperList name="인기 롤링 페이퍼 🔥" />
      <RollingPaperList name="최근에 만든 롤링 페이퍼 ⭐️" />
      <div className="gotoPostButton">
        <ButtonPrimary56 buttonName="나도 만들어보기" />
      </div>
    </>
  );
}

export default ListPage;
