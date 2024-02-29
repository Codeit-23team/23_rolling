import Header from '../../components/header/header';
import RollingPaperList from '../../components/rollingPaper/rollingPaperList/rollingPaperList';
import ButtonPrimary56 from '../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import './index.css';

function ListPage() {
  return (
    <>
      <Header button={true} />
      <div
      style={{
        padding: '0 32px'
      }}>
        <RollingPaperList name="인기 롤링 페이퍼 🔥" buttonClass="popularity" />
        <RollingPaperList name="최근에 만든 롤링 페이퍼 ⭐️" buttonClass="recently"/>
        <div className="gotoPostButton">
          <ButtonPrimary56 buttonName="나도 만들어보기" />
        </div>
      </div>
    </>
  );
}

export default ListPage;
