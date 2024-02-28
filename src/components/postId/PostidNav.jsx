import { useEffect, useState } from 'react';
import { getApiRecipient } from '../../apis/apiRecipient';
import { getApiMessage, getApiMessageCondition } from '../../apis/messageApi';
import miniProfile from './../miniProfile/miniProfile';
import './PostidNav.css';
import Reaction from '../reaction/Reaction';

function PostidNav({ id }) {
  const [name, setname] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [reaction, setReaction] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    //reactionTop3 받아오기
    const getReaction = async () => {
      const reactionData = await getApiRecipient(id);
      setReaction(reactionData.topReactions);
      console.log(reaction);
    };

    const getUserName = async () => {
      //롤링페이퍼 id에 해당하는 name 받아오기
      const data = await getApiRecipient(id);
      setname(data.name);
    };

    const getMessage = async () => {
      const MessageData = await getApiMessage(id);
      setMessageCount(MessageData.count);
      // 메세지 객체 수가 3개 미만일 때
      // if (countMessageData < 4) {
      //   const limitMessageData = await getApiMessageCondition(id, 4);
      //   setMessage(limitMessageData.results);
      // } else {
      //   setMessage(messageData.results);
      // }
    };

    // getMessage();
    getUserName();
    getReaction();
  }, [id]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함

  return (
    <article className="postIdNav">
      <div>
        <p>To. {name}</p>
      </div>
      <div>
        <div className="messageUsers">
          {/* 미니 프로필, 이모지, 공유 버튼 */}
          {/* {message.map(({ profileImageURL }) => {
          <miniProfile profileImageURL={profileImageURL} />;
        })} */}
          <div>profile(ex)</div>
          <p>
            <span className="highlight">{messageCount}</span>명이 작성했어요!
          </p>
        </div>
        <div className="line">
          <div className="imoji">
            {/* 이모티콘 */}
            <ul>
              {/* {reaction.map(({ emoji, count, id }) => (
                <Reaction key={id} emoji={emoji} count={count} />
              ))} */}
            </ul>
            <button type="button">
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostidNav;
