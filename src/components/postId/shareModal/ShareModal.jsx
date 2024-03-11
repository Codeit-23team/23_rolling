import { useSetRecoilState } from 'recoil';
import { shareModalState, toastState } from '../../../store/recoil/apiData';
import styles from './ShareModal.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const { Kakao } = window;

const ShareModal = () => {
  const setShareModal = useSetRecoilState(shareModalState);
  const setToast = useSetRecoilState(toastState);

  const realUrl = window.location.href;
  // 로컬 주소 (localhost 3000 같은거)
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init('354020dfddc75c9e178ab6098437459e');
    // 잘 적용되면 true 를 뱉는다.
  }, []);

  // 카카오톡 공유
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'rolling',
        description: '롤링페이퍼 작성하기',
        imageUrl: 'https://i.ibb.co/31wCVB6/logo-Icon-Color.png',
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
      ],
    });
    setShareModal(false);
  };

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
    }
    setShareModal(false);
  };

  return (
    <>
      <ul className={styles.share}>
        <li>
          <button onClick={() => handleItemClick('url')}>URL 공유</button>
        </li>
        <li>
          <button onClick={() => shareKakao()}>카카오톡 공유</button>
        </li>
      </ul>
    </>
  );
};

export default ShareModal;
