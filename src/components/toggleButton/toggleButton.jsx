import { useState } from 'react';
import BackgroundColor from '../background/backgroundColor/backgroundColor';
import BackgroundImg from '../background/backgroundImg/backgroundImg';
import './toggleButton.css';

function ToggleButton({ setBackgroundColor, setBackgroundImg }) {
  const [toggleOn, setToggleOn] = useState(true);

  const handleOnClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div className="toggleBackground">
      <div className="toggleButton">
        <button
          className={toggleOn ? `on` : null}
          onClick={handleOnClick}
          disabled={toggleOn ? null : `disabled`}
        >
          컬러
        </button>
        <button
          className={toggleOn ? null : `on`}
          onClick={handleOnClick}
          disabled={!toggleOn ? null : `disabled`}
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
