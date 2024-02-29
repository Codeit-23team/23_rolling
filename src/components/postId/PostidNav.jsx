import { useEffect, useState } from 'react';
import { getApiRecipient } from '../../apis/apiRecipient';
import { getApiMessage, getApiMessageCondition } from '../../apis/messageApi';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';
import MiniProfile from './../miniProfile/miniProfile';
import EmojiModal from './emojiModal/emojiModal';
import Reaction from '../reaction/Reaction';
import styles from './PostidNav.module.css';
import line from '@/line.svg';
import { emojiModalState } from '../../store/recoil/apiData';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const PostidNav = ({ id }) => {
  const [name, setname] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [reaction, setReaction] = useState([]);
  const [message, setMessage] = useState([]);

  //recoil
  const emojiModal = useRecoilValue(emojiModalState);
  const setEmojiModal = useSetRecoilState(emojiModalState);

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
    if (!emojiModal) {
      // emojiModal이 false일 때에만 실행
      getReaction();
    }
  }, [id, emojiModal]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함

  const HandleEmojiButtonClick = () => {
    setEmojiModal(!emojiModal);
  };

  return (
    <>
      <article className={styles.postIdNav}>
        <div>
          <p>To. {name}</p>
        </div>
        <div>
          <div className={styles.messageUsers}>
            {/* 미니 프로필, 이모지, 공유 버튼 */}
            {/* {message.map(({ profileImageURL }) => {
          <MiniProfile profileImageURL={profileImageURL} />;
        })} */}
            <div>profile(ex)</div>
            <p>
              <span className={styles.highlight}>{messageCount}</span>명이 작성했어요!
            </p>
          </div>
          <img src={line} alt="line" />
          <div className={styles.emoji}>
            {/* 이모티콘 */}
            <ul>
              {reaction.map(({ emoji, count, id }) => (
                <Reaction key={id} emoji={emoji} count={count} />
              ))}
            </ul>
            <button type="button">
              <img src="/images/chevronDown.svg" alt="chevronDown" />
            </button>
          </div>
          <div className={styles.buttonSection}>
            <div className={styles.addEmoji}>
              <div>
                <ButtonOutlined40
                  onClick={HandleEmojiButtonClick}
                  iconUrl="/images/addImojiIcon.png"
                  buttonName="추가"
                />
              </div>

              {emojiModal && (
                <div>
                  <EmojiModal id={id} />
                </div>
              )}
            </div>
            <img src={line} alt="line" />
            <ButtonOutlined40 iconUrl="/images/shareIcon.png" />
          </div>
        </div>
      </article>
    </>
  );
};

export default PostidNav;
