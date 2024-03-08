import { useEffect, useState } from 'react';
import styles from './PostidBody.module.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage } from '../../apis/messageApi';
import { deleteApiRecipient, getApiRecipient } from '../../apis/apiRecipient';
import plusButton from '@/Enabled.png';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import MessageBox from './messageBox/messageBox';

const PostidBody = ({ id, optionDeleteButton = false }) => {
  const [messageData, setMessageData] = useState([]);
  const [userData, setUserData] = useState([]);
  //edit page에 쓸 useState
  const [trash, setTrash] = useState(false);
  const [trashId, setTrashId] = useState('');

  //edit page에 휴지통 클릭 시
  const handleDeleteClick = (event, cardId) => {
    event.stopPropagation();
    setTrash(true);
    setTrashId(cardId);
  };

  //edit page에 삭제하기 버튼 클릭 시
  const handleAllDeleteClick = (event) => {
    if (confirm('정말 삭제하시겠습니까?') === true) {
      deleteApiRecipient(id);
    } else {
      event.preventDefault();
    }
  };

  useEffect(() => {
    //edit page에 휴지통 버튼 누르면 삭제
    if (trash === true) {
      deleteApiMessage(trashId)
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          setTrash(!trash);
        });
    }
  }, [trash]);
  useEffect(() => {
    getApiMessage(id).then((data) => setMessageData(data.results));
    getApiRecipient(id).then((data) => setUserData(data));
  }, [trash]);

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
          {messageData?.map(
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
