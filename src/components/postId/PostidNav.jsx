import { useEffect, useState } from 'react';
import { getApiRecipient } from '../../apis/apiRecipient';
import { getApiMessage, getApiMessageCondition } from '../../apis/messageApi';
import miniProfile from './../miniProfile/miniProfile';
import './PostidNav.css';

function PostidNav({ id }) {
  const [name, setname] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getUserName = async () => {
      const data = await getApiRecipient(id);
      setname(data.name);
    };

    const getMessage = async () => {
      const MessageData = await getApiMessage(id);
      setMessageCount(MessageData.count);
      // 메세지 객체 수가 3개 미만일 때
      // if (countMessageData < 4) {
      //   const limitMessageData = await getApiMessageCondition(id, 4);
      //   setMessage(limitMessageData);
      // } else {
      //   setMessage(messageData);
      // }
    };

    // getMessage();
    getUserName();
  }, [id]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함

  return (
    <article className="postIdNav">
      <div>
        <p>To. {name}</p>
      </div>
      <div>
        <div className="messageUsers">
          {/* 미니 프로필, 이모지, 공유 버튼 */}
          {/* {message.results.map(({ profileImageURL }) => {
          <miniProfile profileImageURL={profileImageURL} />;
        })} */}
          <div>profile(ex)</div>
          <p>
            <span>{messageCount}</span>명이 작성했어요!
          </p>
        </div>
        <span className="line"></span>
        <div className="imoji">{/* 이모티콘 */}</div>
      </div>
    </article>
  );
}

export default PostidNav;
