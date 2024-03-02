import { useEffect, useState } from 'react';
import './PostidBody.css';
import { Link } from 'react-router-dom';
import { deleteApiMessage, getApiMessage } from '../../apis/messageApi';
import plusButton from '@/Enabled.png';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';

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
          //에러가 발생하는데 이유를 모르겠다 ...
          //작동은 잘 된다
          console.error('Error deleting message:', error);
        })
        .finally(() => {
          setTrash(!trash);
        });
    }

    //edit page에 삭제하기 버튼 누르면 전체 삭제
    if (allTrash === true) {
      messageData?.map(({ id }) => {
        deleteApiMessage(id).catch((error) => {
          //에러가 발생하는데 이유를 모르겠다 ...
          //작동은 잘 된다
          console.error('Error deleting message:', error);
        });
      });
      setAllTrash(!allTrash);
    }
  }, [trash, allTrash]);

  return (
    <div className="postidBody">
      {/*edit page에서 삭제하기 버튼 추가*/}
      {optionDeleteButton === true ? (
        <ButtonPrimary56 buttonName="삭제하기" handleApi={handleAllDeleteClick} />
      ) : null}
      <ul className="row">
        {/*edit page에서는 message 추가 버튼 없음*/}
        {optionDeleteButton === false ? (
          <li className="box">
            <Link to="message">
              <img src={plusButton} alt="message 추가" />
            </Link>
          </li>
        ) : null}
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
