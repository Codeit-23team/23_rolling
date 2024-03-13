import { useState, useEffect } from 'react';
import BackgroundColor from '../background/backgroundColor/backgroundColor';
import BackgroundImg from '../background/backgroundImg/backgroundImg';
import './toggleButton.css';

function ToggleButton({ setBackgroundColor, setBackgroundImg }) {
  const [toggleOn, setToggleOn] = useState(false);

  const handleOnClick = () => {
    setToggleOn(!toggleOn);
  };

  //초기 배경화면 세팅
  useEffect(() => {
    if (toggleOn === false) {
      //초기 컬러
      setBackgroundColor('beige');
      setBackgroundImg('');
    } else {
      //초기 이미지
      setBackgroundColor('');
      setBackgroundImg('https://picsum.photos/id/683/3840/2160');
    }
  }, [toggleOn]);

  return (
    <div className="toggleBackground">
      <div className="toggleButton">
        <button
          className={toggleOn ? 'on' : null}
          onClick={handleOnClick}
          disabled={toggleOn ? null : 'disabled'}
        >
          컬러
        </button>
        <button
          className={!toggleOn ? 'on' : null}
          onClick={handleOnClick}
          disabled={!toggleOn ? null : 'disabled'}
        >
          이미지
        </button>
      </div>
      {toggleOn === false ? (
        <BackgroundColor
          setBackgroundColor={setBackgroundColor}
          setBackgroundImg={setBackgroundImg}
        />
      ) : (
        <BackgroundImg
          setBackgroundColor={setBackgroundColor}
          setBackgroundImg={setBackgroundImg}
        />
      )}
    </div>
  );
}

export default ToggleButton;
