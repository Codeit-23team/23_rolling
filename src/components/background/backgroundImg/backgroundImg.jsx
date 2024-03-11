import { useState } from 'react';
import BackgroundCheck from '../backgroundCheck/backgroundCheck';
import styles from './backgroundImg.module.css';

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

  return (
    <div className={styles.backgroundImg}>
      <div className={styles.backgroundImgBox}>
        <button className={styles.background1} onClick={() => handleOnClick(1)}>
          {check === 1 ? <BackgroundCheck styled={check === 1 ? 'on' : ''} /> : null}
          <img src="https://picsum.photos/id/683/3840/2160" alt="배경이미지1" />
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button className={styles.background2} onClick={() => handleOnClick(2)}>
          {check === 2 ? <BackgroundCheck styled={check === 2 ? 'on' : ''} /> : null}
          <img src="https://picsum.photos/id/24/3840/2160" alt="배경이미지2" />
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button className={styles.background3} onClick={() => handleOnClick(3)}>
          {check === 3 ? <BackgroundCheck styled={check === 3 ? 'on' : ''} /> : null}
          <img src="https://picsum.photos/id/599/3840/2160" alt="배경이미지3" />
        </button>
      </div>
      <div className={styles.backgroundImgBox}>
        <button className={styles.background4} onClick={() => handleOnClick(4)}>
          {check === 4 ? <BackgroundCheck styled={check === 4 ? 'on' : ''} /> : null}
          <img src="https://picsum.photos/id/1058/3840/2160" alt="배경이미지4" />
        </button>
      </div>
    </div>
  );
}

export default BackgroundImg;
