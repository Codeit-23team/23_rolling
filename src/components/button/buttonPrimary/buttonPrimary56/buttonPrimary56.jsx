import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, userInfo }) => {
  const handlePostUserInfo = () => {
    postApiRecipient('네이버', 'green', 'https://www.naver.com/').then((response) => {
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
