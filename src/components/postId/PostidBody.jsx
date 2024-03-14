import { useEffect, useState, useRef } from 'react';
import styles from './PostidBody.module.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage, getApiMessageOffset } from '../../apis/messageApi';
import { deleteApiRecipient, getApiRecipient } from '../../apis/apiRecipient';
import plusButton from '@/Enabled.png';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import MessageBox from './messageBox/messageBox';
import { useRecoilState } from 'recoil';
import { deleteState } from '../../store/recoil/apiData';

const PostidBody = ({ id, optionDeleteButton = false, fixCardData }) => {
  const [userData, setUserData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [messageDataOffset, setMessageDataOffset] = useState([]);
  const [scrollY, setScrollY] = useState(false);
  //edit page에 쓸 useState
  const [trash, setTrash] = useState(false);
  const [trashId, setTrashId] = useState(null);
  // delete 렌더링 recoil
  const [deleteValue, setDeleteValue] = useRecoilState(deleteState);

  //edit page에 휴지통 클릭 시
  const handleDeleteClick = (event, cardId) => {
    event.stopPropagation();
    setTrash(true);
    setTrashId(cardId);
    fixCardData();
  };

  //edit page에 삭제하기 버튼 클릭 시
  const handleAllDeleteClick = (event) => {
    if (confirm('정말 삭제하시겠습니까?') === true) {
      deleteApiRecipient(id).then(() => setDeleteValue(!deleteValue));
      // deleteApiRecipient의 호출이 성공했을때 state를 변경합니다!
    } else {
      event.preventDefault();
    }
  };

  //스크롤 위치 맨밑에 있을시 렌더링
  const onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setScrollY(!scrollY);
    }
  };

  //메시지 가져오기
  useEffect(() => {
    let isMounted = true;

    if (trash === true) {
      deleteApiMessage(trashId)
        .then(() => {
          setTrash(!trash);
        })
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      getApiMessageOffset(id, 8, offset)
        .then((data) => {
          if (isMounted && data.results.length !== 0) {
            setMessageDataOffset((prev) => [...prev, ...data.results]);
            setOffset((prevOffset) => prevOffset + 8);
          }
          if (trashId !== null) {
            setMessageDataOffset((prev) => prev.filter((message) => message.id !== trashId));
            setTrashId(null);
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }

    getApiRecipient(id).then((data) => setUserData(data));

    return () => {
      isMounted = false;
    };
  }, [trash, scrollY]);

  //스크롤
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={styles.postBodyBox}
      style={{
        backgroundImage: userData?.backgroundImageURL
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${userData?.backgroundImageURL})`
          : null,
        backgroundColor: `var(--${userData?.backgroundColor}200)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.postidBody}>
        {/*edit page에서 삭제하기 버튼 추가*/}
        <div className={styles.editButton}>
          {optionDeleteButton === true ? (
            <div className={styles.editButtonBox}>
              <ButtonPrimary56
                linkName={`/list`}
                buttonName="삭제하기"
                handleApi={(event) => handleAllDeleteClick(event)}
              />
              <ButtonPrimary56 linkName={`/post/${id}`} buttonName="저장하기" />
            </div>
          ) : (
            <ButtonPrimary56 linkName={`/post/${id}/edit`} buttonName="수정하기" />
          )}
        </div>
        <ul className={styles.row}>
          {/*edit page에서는 message 추가 버튼 없음*/}
          {optionDeleteButton === false ? (
            <li className={styles.box}>
              <Link to="message">
                <img src={plusButton} alt="message 추가" />
              </Link>
            </li>
          ) : null}
          {messageDataOffset?.map(
            ({ id: cardId, content, createdAt, profileImageURL, relationship, sender }) => {
              return (
                <li key={cardId}>
                  <MessageBox
                    handleDeleteClick={handleDeleteClick}
                    optionDeleteButton={optionDeleteButton}
                    id={cardId}
                    content={content}
                    createdAt={createdAt}
                    profileImageURL={profileImageURL}
                    relationship={relationship}
                    sender={sender}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostidBody;
