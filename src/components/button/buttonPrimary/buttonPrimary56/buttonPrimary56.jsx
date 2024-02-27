import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

// 데이터 보낼시 배경 이미지는 링크를 따와야 함
const ButtonPrimary56 = ({ buttonName, userInfo }) => {
  const handlePostUserInfo = () => {
    postApiRecipient({
      /* 보낼 데이터 작성 */
    }).then((response) => {
      const data = response;
      return data;
    });
  };

  return (
    <button className="buttonPrimary56" onClick={handlePostUserInfo}>
      {buttonName}
    </button>
  );
};

export default ButtonPrimary56;
