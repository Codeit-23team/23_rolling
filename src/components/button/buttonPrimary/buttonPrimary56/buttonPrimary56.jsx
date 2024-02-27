import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postApiRecipient } from '../../../../apis/apiRecipient';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, userName, backgroundColor, backgroundImg }) => {
  const [goLink, setGoLink] = useState('');
  const navigate = useNavigate();
  //혹시 id가 필요하면 ㄱㄱ
  //const [userId, setUserId] = useState(null);

  const userData = {
    name: !!userName === false ? null : userName,
    color: !!backgroundColor === false ? 'beige' : backgroundColor,
    img: !!backgroundImg === false ? null : backgroundImg,
  };

  const handlePostUserInfo = () => {
    if (userData.name === null) {
      //데이터 보내면 안됨
    } else {
      postApiRecipient(userData.name, userData.color, userData.backgroundImg).then((response) => {
        const data = response;
        //혹시 id가 필요하면 ㄱㄱ
        //setUserId(data.id);
        // post/{id} 페이지 이동
        navigate(`/post/${data.id}`);
      });
    }
  };

  useEffect(() => {
    if (buttonName === '구경해보기') {
      setGoLink('/list');
    }
  }, []);

  return (
    <Link to={goLink}>
      <button className="buttonPrimary56" onClick={handlePostUserInfo}>
        {buttonName}
      </button>
    </Link>
  );
};

export default ButtonPrimary56;
