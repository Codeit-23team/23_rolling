import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import styles from './backgroundImg.module.css';

function BackgroundImg({ setBackgroundColor, setBackgroundImg }) {
  const [check, setCheck] = useState(1);
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
    <div className={styles.backgroundImg}>
      <div className={styles.backgroundImgBox}>
        <button
          className={styles.background1}
          onClick={() => handleOnClick(1)}
          style={check === 1 ? transparency : null}
        >
          {check === 1 ? <BackgroundCheck /> : null}
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button
          className={styles.background2}
          onClick={() => handleOnClick(2)}
          style={check === 2 ? transparency : null}
        >
          {check === 2 ? <BackgroundCheck /> : null}
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button
          className={styles.background3}
          onClick={() => handleOnClick(3)}
          style={check === 3 ? transparency : null}
        >
          {check === 3 ? <BackgroundCheck /> : null}
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button
          className={styles.background4}
          onClick={() => handleOnClick(4)}
          style={check === 4 ? transparency : null}
        >
          {' '}
          {check === 4 ? <BackgroundCheck /> : null}
        </button>
      </div>
    </div>
  );
}

export default BackgroundImg;
