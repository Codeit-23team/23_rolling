import Header from '../../components/header/header';
import RollingPaperList from '../../components/rollingPaper/rollingPaperList/rollingPaperList';
import ButtonPrimary56 from '../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { getApiRecipientList, getApiRecipientOffset } from '../../apis/apiRecipient';
import { useRecoilValue } from 'recoil';
import { deleteState } from '../../store/recoil/apiData';

function ListPage() {
  const deleteValue = useRecoilValue(deleteState);
  const [userData, setUserData] = useState([]);
  const [popUserData, setPopUserData] = useState([]);

  useEffect(() => {
    Promise.all([getApiRecipientOffset(100, 0, 'like'), getApiRecipientOffset(100, 0, '')])
      .then(([popData, regularData]) => {
        setPopUserData(popData.results);
        setUserData(regularData.results);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [deleteValue]);

  /*
  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(results);
      if (results && results.length > 0) {
        const sortedUserDataArray = results.slice().sort((a, b) => {
          const lengthA = a.messageCount;
          const lengthB = b.messageCount;
          return lengthB - lengthA;
        });

        setPopUserData(sortedUserDataArray);
      } else {
        //페이퍼가 없을때 undefined 주기
        setPopUserData(undefined);
      }
    });
    // deleteValue가 변경되었을때 랜더링 합니다!
  }, [deleteValue]);
  */

  return (
    <>
      <Header button={true} />
      <div className={styles.listContainer}>
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
        <div className={styles.gotoPostButton}>
          <ButtonPrimary56 linkName={'/post'} buttonName="나도 만들어보기" />
        </div>
      </div>
    </>
  );
}

export default ListPage;
