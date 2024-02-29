import { useEffect, useState } from 'react';
import './PostidBody.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage } from '../../apis/messageApi';
import plusButton from '@/Enabled.png';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';

const PostidBody = ({ id, optionDeleteButton = false }) => {
  //휴지통에 쓸 useState
  const [trash, setTrash] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //휴지통 클릭 시 - 여승구
  const handleDeleteClick = (id) => {
    setTrash(!trash);
    setDeleteId(id);
  };

  // messageData 안에 데이터 있습니다! - 임동현
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    getApiMessage(id).then((data) => setMessageData(data.results));

    //휴지통 버튼 누르면 삭제
    if (trash === true) {
      deleteApiMessage(deleteId)
        .then((response) => {
          const data = response;
          return data;
        })
        .catch((error) => {
          //에러가 발생하는데 이유를 모르겠다 ... 보류
          console.error('Error deleting message:', error);
        })
        .finally(() => {
          setTrash(!trash);
        });
    }
  }, [trash]);

  return (
    <div className="postidBody">
      <ul className="row">
        <li className="box">
          <Link to="message">
            <img src={plusButton} alt="message 추가" />
          </Link>
        </li>
        {/* <div className="messageBox">
          <h1>form. ~~</h1>
          <ul>
            <li>메세지블라블라</li>
          </ul>
        </div> */}
        {messageData?.map(({ id }) => {
          return (
            <li key={id} className="messageBox">
              <div>{id}</div>
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
  );
};

export default PostidBody;
