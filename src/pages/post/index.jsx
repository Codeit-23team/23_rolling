import { useState } from 'react';
import Header from '../../components/header/header';
import InputName from '../../components/inputName/inputName';
import ChooseBackground from '../../components/chooseBackground/chooseBackground';
import styles from './index.module.css';

function PostPage() {
  const [userName, setUserName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [backgroundImg, setBackgroundImg] = useState('');

  return (
    <div className={styles.postPage}>
      <Header button={false} />
      <InputName
        type="To"
        setUserName={setUserName}
        holdedrType={'받는 사람 이름을 입력해 주세요'}
      />
      <ChooseBackground
        userName={userName}
        backgroundColor={backgroundColor}
        backgroundImg={backgroundImg}
        setBackgroundColor={setBackgroundColor}
        setBackgroundImg={setBackgroundImg}
      />
    </div>
  );
}

export default PostPage;
