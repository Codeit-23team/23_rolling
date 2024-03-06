import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ToastContainer, toast } from 'react-toastify';
import { getApiRecipient } from '../../apis/apiRecipient';
import { getApiMessage } from '../../apis/messageApi';
import { emojiModalState, shareModalState, toastState } from '../../store/recoil/apiData';
import ProfileBox from '../profileList/profilebox/profileBox';
import Reaction from '../reaction/Reaction';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';
import EmojiShowModal from './emojiShowModal/emojiShowModal';
import EmojiAddModal from './emojiAddModal/emojiAddModal';
import ShareModal from './shareModal/ShareModal';
import styles from './PostidNav.module.css';
import './PostNav.css';
import line from '@/line.svg';

const PostidNav = ({ id }) => {
  const [name, setname] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [reaction, setReaction] = useState([]);
  const [profileMessage, setProfileMessage] = useState([]);
  const [profileCount, setProfileCount] = useState(0);
  const [emojiToggle, setEmojiToggle] = useState(false);

  //recoil
  const emojiModal = useRecoilValue(emojiModalState);
  const shareModal = useRecoilValue(shareModalState);
  const showToast = useRecoilValue(toastState);
  const setEmojiModal = useSetRecoilState(emojiModalState);
  const setShareModal = useSetRecoilState(shareModalState);
  const setShowToast = useSetRecoilState(toastState);

  useEffect(() => {
    getApiRecipient(id).then((response) => {
      const { recentMessages, messageCount } = response;
      setProfileMessage(recentMessages);
      setProfileCount(messageCount);
    });

    //reactionTop3 받아오기
    const getReaction = async () => {
      const reactionData = await getApiRecipient(id);
      setReaction(reactionData.topReactions);
    };

    const getUserName = async () => {
      //롤링페이퍼 id에 해당하는 name 받아오기
      const data = await getApiRecipient(id);
      setname(data.name);
    };

    const getMessage = async () => {
      const MessageData = await getApiMessage(id);
      setMessageCount(MessageData.count);
    };

    getMessage();
    getUserName();

    if (!emojiModal) {
      getReaction(); // emojiModal이 false일 때에만 실행
    }

    if (showToast === true) {
      toast.success('URL이 복사 되었습니다.');
      setShowToast(false);
    }
  }, [id, emojiModal, showToast]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함

  const HandleEmojiButtonClick = () => {
    setEmojiModal(!emojiModal);
  };

  const HandleShareButtonClick = () => {
    setShareModal(!shareModal);
  };

  const HandleShowAllEmojiClick = () => {
    setEmojiToggle(!emojiToggle);
  };

  return (
    <>
      <article className={styles.postIdNav}>
        <div>
          <div>
            <p>To. {name}</p>
          </div>
          <div className="postIdNavUtil">
            <div className={styles.messageUsers}>
              {/* 미니 프로필, 이모지, 공유 버튼 */}
              <ProfileBox recentMessages={profileMessage} messageCount={profileCount} />
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
              <button type="button" onClick={HandleShowAllEmojiClick}>
                {emojiToggle ? (
                  <img className={styles.toggle} src="/images/chevronUp.svg" alt="chevronUp" />
                ) : (
                  <img src="/images/chevronDown.svg" alt="chevronDown" />
                )}
              </button>
              {emojiToggle && <EmojiShowModal id={id} />}
            </div>
            <div className={styles.buttonSection}>
              <div className="addEmoji">
                <div>
                  <ButtonOutlined40
                    onClick={HandleEmojiButtonClick}
                    iconUrl="/images/addImojiIcon.png"
                    buttonName="추가"
                  />
                </div>
                {emojiModal && <EmojiAddModal id={id} />}
              </div>
              <img src={line} alt="line" />
              <div className="share">
                <ButtonOutlined40
                  onClick={HandleShareButtonClick}
                  iconUrl="/images/shareIcon.png"
                />
                {shareModal && (
                  <div>
                    <ShareModal id={id} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Slide
      />
    </>
  );
};

export default PostidNav;
