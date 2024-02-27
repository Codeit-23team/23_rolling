import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, userName, backgroundColor, backgroundImg }) => {
  const userData = {
    name: !!userName === false ? null : userName,
    color: !!backgroundColor === false ? 'beige' : backgroundColor,
    img: !!backgroundImg === false ? null : backgroundImg,
  };

  const handlePostUserInfo = () => {
    if (userData.name === null) {
      alert('이름을 입력해 주세요');
    } else {
      postApiRecipient(userData.name, userData.color, userData.backgroundImg).then((response) => {
        const data = response;
        return data;
      });
    }
  };

  return (
    <button className="buttonPrimary56" onClick={handlePostUserInfo}>
      {buttonName}
    </button>
  );
};

export default ButtonPrimary56;
