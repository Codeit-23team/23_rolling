import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, userInfo }) => {
  const userData = {
    name: userInfo.userName,
    color: !!userInfo.backgroundColor === false ? 'beige' : userInfo.backgroundColor,
    img: !!userInfo.backgroundImg === false ? null : userInfo.backgroundImg,
  };

  const handlePostUserInfo = () => {
    postApiRecipient(userData.name, userData.color, null).then((response) => {
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
