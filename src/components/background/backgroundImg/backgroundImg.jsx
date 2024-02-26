import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import './backgroundImg.css';

function BackgroundImg() {
  const [check, setCheck] = useState(0);

  const handleOnClick = (number) => {
    setCheck(number);
  };

  return (
    <div className="backgroundImg">
      <div className="backgroundImgBox">
        <button className="background1" onClick={() => handleOnClick(1)} />
        {check === 1 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button className="background2" onClick={() => handleOnClick(2)} />
        {check === 2 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button className="background3" onClick={() => handleOnClick(3)} />
        {check === 3 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundImgBox">
        <button className="background4" onClick={() => handleOnClick(4)} />
        {check === 4 ? <BackgroundCheck /> : null}
      </div>
    </div>
  );
}

export default BackgroundImg;
