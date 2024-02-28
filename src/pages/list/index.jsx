import Header from '../../components/header/header';
import RollingPaperList from '../../components/rollingPaper/rollingPaperList/rollingPaperList';

function ListPage() {
  return (
    <>
      <Header button={true} />
      <RollingPaperList name="인기 롤링 페이퍼 🔥" />
      <RollingPaperList name="최근에 만든 롤링 페이퍼 ⭐️" />
    </>
  );
}

export default ListPage;
