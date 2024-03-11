import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import styles from './backgroundColor.module.css';

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
    <div className={styles.backgroundColor}>
      <div className={styles.backgroundColorBox}>
        {/* api에서 beige 컬러 받음 */}
        <button className={styles.beige} onClick={() => handleOnClick('beige')} />
        {check === 'beige' ? <BackgroundCheck /> : null}
      </div>
      <div className={styles.backgroundColorBox}>
        <button className={styles.purple} onClick={() => handleOnClick('purple')} />
        {check === 'purple' ? <BackgroundCheck /> : null}
      </div>
      <div className={styles.backgroundColorBox}>
        <button className={styles.blue} onClick={() => handleOnClick('blue')} />
        {check === 'blue' ? <BackgroundCheck /> : null}
      </div>
      <div className={styles.backgroundColorBox}>
        <button className={styles.green} onClick={() => handleOnClick('green')} />
        {check === 'green' ? <BackgroundCheck /> : null}
      </div>
    </div>
  );
}

export default BackgroundColor;
