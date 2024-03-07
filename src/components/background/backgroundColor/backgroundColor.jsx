import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import './backgroundColor.css';

function BackgroundColor({ setBackgroundColor, setBackgroundImg }) {
  const [check, setCheck] = useState('');

  const handleOnClick = (color) => {
    if (check === color) {
      setCheck('');
      setBackgroundColor('beige');
      setBackgroundImg('');
    } else {
      setCheck(color);
      setBackgroundColor(color);
      setBackgroundImg('');
    }
  };

  return (
    <div className="backgroundColor">
      <div className="backgroundColorBox">
        {/* api에서 beige 컬러 받음 */}
        <button className="beige" onClick={() => handleOnClick('beige')} />
        {check === 'beige' ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="purple" onClick={() => handleOnClick('purple')} />
        {check === 'purple' ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="blue" onClick={() => handleOnClick('blue')} />
        {check === 'blue' ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="green" onClick={() => handleOnClick('green')} />
        {check === 'green' ? <BackgroundCheck /> : null}
      </div>
    </div>
  );
}

export default BackgroundColor;
