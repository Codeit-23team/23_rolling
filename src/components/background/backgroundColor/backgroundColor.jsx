import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import './backgroundColor.css';

function BackgroundColor() {
  const [check, setCheck] = useState(0);

  const handleOnClick = (number) => {
    setCheck(number);
  };

  return (
    <div className="backgroundColor">
      <div className="backgroundColorBox">
        <button className="orange" onClick={() => handleOnClick(1)} />
        {check === 1 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="purple" onClick={() => handleOnClick(2)} />
        {check === 2 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="blue" onClick={() => handleOnClick(3)} />
        {check === 3 ? <BackgroundCheck /> : null}
      </div>
      <div className="backgroundColorBox">
        <button className="green" onClick={() => handleOnClick(4)} />
        {check === 4 ? <BackgroundCheck /> : null}
      </div>
    </div>
  );
}

export default BackgroundColor;
