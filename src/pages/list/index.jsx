import Header from '../../components/header/header';
import RollingPaperList from '../../components/rollingPaper/rollingPaperList/rollingPaperList';
import ButtonPrimary56 from '../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import './index.css';
import { useEffect, useState } from 'react';
import { getApiRecipientList } from '../../apis/apiRecipient';

function ListPage() {
  const [userData, setUserData] = useState(undefined);
  const [popUserData, setPopUserData] = useState(undefined);

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(results);
    });
    if (userData && userData.length > 0) {
      const sortedUserDataArray = userData.slice().sort((a, b) => {
        const lengthA = a.messageCount;
        const lengthB = b.messageCount;
        return lengthB - lengthA;
      });

      setPopUserData(sortedUserDataArray);
    }
  }, [userData]);

  return (
    <>
      <Header button={true} />
      <div
        style={{
          padding: '0 32px',
        }}
      >
        <RollingPaperList
          userData={popUserData}
          name="인기 롤링 페이퍼 🔥"
          buttonClass="popularity"
        />
        <RollingPaperList
          userData={userData}
          name="최근에 만든 롤링 페이퍼 ⭐️"
          buttonClass="recently"
        />
        <div className="gotoPostButton">
          <ButtonPrimary56 linkName={'/post'} buttonName="나도 만들어보기" />
        </div>
      </div>
    </>
  );
}

export default ListPage;
