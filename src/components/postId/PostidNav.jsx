import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ToastContainer, toast } from 'react-toastify';
import { getApiRecipient } from '../../apis/apiRecipient';
import { getApiMessage } from '../../apis/messageApi';
import { emojiAddModalState, shareModalState, toastState } from '../../store/recoil/apiData';
import ProfileBox from '../profileList/profilebox/profileBox';
import Reaction from '../reaction/Reaction';
import ButtonOutlined40 from '../button/buttonOutlined/buttonOutlined40/buttonOutlined40';
import EmojiShowModal from './emojiShowModal/emojiShowModal';
import EmojiAddModal from './emojiAddModal/emojiAddModal';
import ShareModal from './shareModal/ShareModal';
import styles from './PostidNav.module.css';
import line from '@/line.svg';

const PostidNav = ({ id }) => {
  const [name, setname] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [reaction, setReaction] = useState([]);
  const [profileMessage, setProfileMessage] = useState([]);
  const [profileCount, setProfileCount] = useState(0);
  const [emojiShowAll, setEmojiShowAll] = useState(false);

  //recoil
  const emojiAddModal = useRecoilValue(emojiAddModalState);
  const shareModal = useRecoilValue(shareModalState);
  const showToast = useRecoilValue(toastState);
  const setEmojiAddModal = useSetRecoilState(emojiAddModalState);
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

    if (emojiAddModal === false) {
      getReaction(); // emojiAddModal이 false일 때에만 실행
    }

    if (showToast === true) {
      toast.success('URL이 복사 되었습니다.');
      setShowToast(false);
    }

    //모달 이외의 영역 클릭했을 때 모달이 꺼지도록 하는 함수
    const HandleEmojiAddClick = (e) => {
      if (emojiAddModal && !e.target.closest('.' + styles.addEmoji)) {
        setEmojiAddModal(false);
      }
    };

    const HandleShareButtonClick = (e) => {
      if (shareModal && !e.target.closest('.' + styles.share)) {
        setShareModal(false);
      }
    };
    const HandleShowAllEmojiClick = (e) => {
      if (emojiShowAll && !e.target.closest('.' + styles.emoji)) {
        setEmojiShowAll(false);
      }
    };

    document.addEventListener('click', HandleEmojiAddClick);
    document.addEventListener('click', HandleShareButtonClick);
    document.addEventListener('click', HandleShowAllEmojiClick);

    return () => {
      document.removeEventListener('click', HandleEmojiAddClick);
      document.removeEventListener('click', HandleShareButtonClick);
      document.removeEventListener('click', HandleShowAllEmojiClick);
    };
  }, [id, emojiAddModal, shareModal, emojiShowAll, showToast]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함

  const addEmojiToggle = () => {
    setEmojiAddModal(!emojiAddModal);
  };

  const shareToggle = () => {
    setShareModal(!shareModal);
  };

  const HandleShowAllEmojiClick = () => {
    setEmojiShowAll(!emojiShowAll);
  };

  return (
    <>
      <article className={styles.postIdNav}>
        <div>
          <p>To. {name}</p>
        </div>
        <div className={styles.postIdNavUtil}>
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
              {emojiShowAll ? (
                <img className={styles.toggle} src="/images/chevronUp.svg" alt="chevronUp" />
              ) : (
                <img src="/images/chevronDown.svg" alt="chevronDown" />
              )}
            </button>
            {emojiShowAll && <EmojiShowModal id={id} />}
          </div>
          <div className={styles.buttonSection}>
            <div className={styles.addEmoji}>
              <div>
                <ButtonOutlined40
                  onClick={addEmojiToggle}
                  iconUrl="/images/addImojiIcon.png"
                  buttonName="추가"
                />
              </div>
              {emojiAddModal && <EmojiAddModal id={id} />}
            </div>
            <img src={line} alt="line" />
            <div className={styles.share}>
              <ButtonOutlined40 onClick={shareToggle} iconUrl="/images/shareIcon.png" />
              {shareModal && (
                <div>
                  <ShareModal id={id} />
                </div>
              )}
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
