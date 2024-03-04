import { useEffect, useState } from 'react';
import styles from './PostidBody.module.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage } from '../../apis/messageApi';
import plusButton from '@/Enabled.png';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import MessageBox from './messageBox/messageBox';

const PostidBody = ({ id, optionDeleteButton = false }) => {
  // messageData 안에 데이터 있습니다! - 임동현
  const [messageData, setMessageData] = useState([]);

  //edit page에 쓸 useState
  const [trash, setTrash] = useState(false);
  const [allTrash, setAllTrash] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //edit page에 휴지통 클릭 시
  const handleDeleteClick = (id) => {
    setTrash(!trash);
    setDeleteId(id);
  };

  //edit page에 삭제하기 버튼 클릭 시
  const handleAllDeleteClick = () => {
    setAllTrash(!allTrash);
  };

  useEffect(() => {
    getApiMessage(id).then((data) => setMessageData(data.results));

    //edit page에 휴지통 버튼 누르면 삭제
    if (trash === true) {
      deleteApiMessage(deleteId)
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          setTrash(!trash);
        });
    }

    //edit page에 삭제하기 버튼 누르면 전체 삭제
    if (allTrash === true) {
      messageData
        ?.map(({ id }) => {
          deleteApiMessage(id).catch((error) => {
            throw new Error(error);
          });
        })
        .finally(() => {
          setAllTrash(!trash);
        });
    }
  }, [trash, allTrash]);

  return (
    <div className={styles.postBodyBox}>
      <div className={styles.postidBody}>
        {/*edit page에서 삭제하기 버튼 추가*/}
        {optionDeleteButton === true ? (
          <ButtonPrimary56 buttonName="삭제하기" handleApi={handleAllDeleteClick} />
        ) : null}
        <ul className={styles.row}>
          {/*edit page에서는 message 추가 버튼 없음*/}
          {optionDeleteButton === false ? (
            <li className={styles.box}>
              <Link to="message">
                <img src={plusButton} alt="message 추가" />
              </Link>
            </li>
          ) : null}
          {messageData?.map(({ id, content, createdAt, profileImageURL, relationship, sender }) => {
            return (
              <li key={id} className={styles.messageBox}>
                <MessageBox
                  content={content}
                  createdAt={createdAt}
                  profileImageURL={profileImageURL}
                  relationship={relationship}
                  sender={sender}
                />
                {/* post/{id}/edit 페이지에서 버튼 활성화 */}
                {optionDeleteButton === true ? (
                  <ButtonOutlined40
                    iconUrl="/images/deleted.svg"
                    onClick={() => handleDeleteClick(id)}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostidBody;
