import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import './backgroundImg.css';

function BackgroundImg({ setBackgroundColor, setBackgroundImg }) {
  const [check, setCheck] = useState(null);
  const imgId = [683, 24, 599, 1058];

  const handleOnClick = (number) => {
    if (check === number) {
      setCheck(null);
      setBackgroundColor('beige');
      setBackgroundImg('');
    } else {
      setCheck(number);
      setBackgroundColor('');
      setBackgroundImg(`https://picsum.photos/id/${imgId[number - 1]}/3840/2160`);
    }
  };

  const transparency = {
    opacity: 0.5,
  };

  return (
    <div className="backgroundImg">
      <div className="backgroundImgBox">
        <button
          className="background1"
          onClick={() => handleOnClick(1)}
          style={check === 1 ? transparency : null}
        />
        {check === 1 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button
          className="background2"
          onClick={() => handleOnClick(2)}
          style={check === 2 ? transparency : null}
        />
        {check === 2 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button
          className="background3"
          onClick={() => handleOnClick(3)}
          style={check === 3 ? transparency : null}
        />
        {check === 3 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button
          className="background4"
          onClick={() => handleOnClick(4)}
          style={check === 4 ? transparency : null}
        />
        {check === 4 ? <BackgroundCheck /> : null}
      </div>
    </div>
  );
}

export default BackgroundImg;
