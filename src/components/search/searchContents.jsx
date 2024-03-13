import { useRecoilValue } from 'recoil';
import styles from './searchContents.module.css';
import { searchState } from '../../store/recoil/apiData';
import { getApiRecipientList, getApiRecipientOffset } from '../../apis/apiRecipient';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchContents = () => {
  const currentValue = useRecoilValue(searchState);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getApiRecipientOffset(100, 0, '')
      .then((data) => {
        const searchResult = data.results.filter((value) => {
          return value.name.includes(currentValue);
        });
        setUserData(searchResult);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [currentValue]);

  /*
  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(
        results.filter((value) => {
          return value.name.includes(currentValue);
        }),
      );
    });
  }, [currentValue]);
  */

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContents}>
        <p className={styles.searchTopText}>
          "<strong>{currentValue}</strong>"에 대한 검색 결과{' '}
          <strong>
            총 {currentValue === '' || userData?.length === 0 ? 0 : userData?.length}건
          </strong>{' '}
          입니다.
        </p>
        <div className={styles.searchResultBox}>
          <h3>
            <span>총 {currentValue === '' || userData?.length === 0 ? 0 : userData?.length}건</span>
          </h3>
          <ul>
            {currentValue === '' || userData?.length === 0 ? (
              <p className={styles.searchNoData}>검색 결과가 없습니다.</p>
            ) : (
              userData?.map(({ id, name, recentMessages }) => {
                return (
                  <li key={id}>
                    <Link to={`/post/${id}`}>
                      <div className={styles.searchResultList}>
                        <p>To.{name}</p>
                        <span>
                          <strong>{recentMessages?.length}개</strong>의 메시지
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchContents;
