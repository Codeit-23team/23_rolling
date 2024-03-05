import { useEffect, useState } from 'react';
import styles from './PostidBody.module.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage } from '../../apis/messageApi';
import { deleteApiRecipient } from '../../apis/apiRecipient';
import ModalPortal from '../../utils/modalPortal';
import MessageModal from './messageModal/messageModal';
import plusButton from '@/Enabled.png';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import MessageBox from './messageBox/messageBox';

const PostidBody = ({ id, optionDeleteButton = false }) => {
  // messageData 안에 데이터 있습니다! - 임동현
  const [messageData, setMessageData] = useState([]);

  //edit page에 쓸 useState
  const [trash, setTrash] = useState(false);
  const [trashId, setTrashId] = useState('');

  //모달 열기
  const [modalOpen, setModalOpen] = useState(false);

  //edit page에 휴지통 클릭 시
  const handleDeleteClick = (cardId) => {
    setTrash(true);
    setTrashId(cardId);
  };

  //edit page에 삭제하기 버튼 클릭 시
  const handleAllDeleteClick = () => {
    deleteApiRecipient(id);
  };

  const handleMessageModalClick = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    getApiMessage(id).then((data) => setMessageData(data.results));

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

  return (
    <div className={styles.postBodyBox}>
      <div className={styles.postidBody}>
        {/*edit page에서 삭제하기 버튼 추가*/}
        <div className={styles.editButton}>
          {optionDeleteButton === true ? (
            <ButtonPrimary56
              linkName={`/`}
              buttonName="삭제하기"
              handleApi={handleAllDeleteClick}
            />
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
                <li key={cardId} className={styles.messageBox}>
                  <button style={{ all: 'unset' }} onClick={handleMessageModalClick}>
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
                    {/* 메시지 모달 ㄱㄱ */}
                    {modalOpen && (
                      <ModalPortal>
                        <MessageModal
                          handleDeleteClick={handleMessageModalClick}
                          optionDeleteButton={optionDeleteButton}
                          id={cardId}
                          content={content}
                          createdAt={createdAt}
                          profileImageURL={profileImageURL}
                          relationship={relationship}
                          sender={sender}
                        />
                      </ModalPortal>
                    )}
                  </button>
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
