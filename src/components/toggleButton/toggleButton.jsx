import { useState } from 'react';
import BackgroundColor from '../background/backgroundColor/backgroundColor';
import BackgroundImg from '../background/backgroundImg/backgroundImg';
import './toggleButton.css';

function ToggleButton() {
  const [toggleOn, setToggleOn] = useState(true);

  const handleOnClick = () => {
    setToggleOn(!toggleOn);
    setOptionBackground(!toggleOn);
  };

  return (
    <div>
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
      {toggleOn === false ? <BackgroundColor /> : <BackgroundImg />}
    </div>
  );
}

export default ToggleButton;
