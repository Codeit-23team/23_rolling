import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, userInfo }) => {
  console.log(userInfo.userName);
  console.log(userInfo.backgroundColor);
  console.log(userInfo.backgroundImg);
  const handlePostUserInfo = () => {
    postApiRecipient(userInfo.userName, userInfo.backgroundColor, userInfo.backgroundImg).then(
      (response) => {
        const data = response;
        return data;
      },
    );
  };

  return (
    <button className="buttonPrimary56" onClick={handlePostUserInfo}>
      {buttonName}
    </button>
  );
};

export default ButtonPrimary56;
