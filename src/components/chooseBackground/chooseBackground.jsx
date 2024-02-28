import { useNavigate } from 'react-router-dom';
import { postApiRecipient } from '../../apis/apiRecipient';
import { useSetRecoilState } from 'recoil';
import { postUserId } from '../../store/recoil/apiData';
import ToggleButton from '../toggleButton/toggleButton';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import './chooseBackground.css';

function ChooseBackground({
  userName,
  backgroundColor,
  backgroundImg,
  setBackgroundColor,
  setBackgroundImg,
}) {
  const navigate = useNavigate();
  const setSelectId = useSetRecoilState(postUserId);

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
        setSelectId(data.id);
        // post/{id} 페이지 이동
        navigate(`/post/${data.id}`);
      });
    }
  };

  return (
    <div className="chooseBackground">
      <div className="chooseBackgroundText">
        <h1>배경화면을 선택해 주세요.</h1>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>
      <ToggleButton setBackgroundColor={setBackgroundColor} setBackgroundImg={setBackgroundImg} />
      <ButtonPrimary56 buttonName="생성하기" handleApi={handlePostUserInfo} />
    </div>
  );
}

export default ChooseBackground;
