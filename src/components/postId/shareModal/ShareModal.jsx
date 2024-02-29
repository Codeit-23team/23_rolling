import { useSetRecoilState } from 'recoil';
import { shareModalState, toastState } from '../../../store/recoil/apiData';
import styles from './ShareModal.module.css';
import 'react-toastify/dist/ReactToastify.css';

const ShareModal = () => {
  const setShareModal = useSetRecoilState(shareModalState);
  const setToast = useSetRecoilState(toastState);

  const handleItemClick = (action) => {
    if (action === 'url') {
      const currentUrl = window.location.href;
      // 클립보드에 URL을 복사
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          setToast(true);
        })
        .catch((error) => {
          console.error('클립보드 복사 실패:', error);
        });
    } else if (action === 'kakao') {
      alert('카카오톡으로 공유합니다.');
    }
    setShareModal(false);
  };

  return (
    <>
      <ul className={styles.share}>
        <li onClick={() => handleItemClick('url')}>URL 공유</li>
        <li onClick={() => handleItemClick('kakao')}>카카오톡 공유</li>
      </ul>
    </>
  );
};

export default ShareModal;
