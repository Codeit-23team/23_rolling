import { useState } from 'react';
import Header from '../../components/header/header';
import InputName from '../../components/inputName/inputName';
import ChooseBackground from '../../components/chooseBackground/chooseBackground';

function PostPage() {
  const [userName, setUserName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [backgroundImg, setBackgroundImg] = useState('');

  return (
    <>
      <Header button={false} />
      <InputName type="To" setUserName={setUserName} />
      <ChooseBackground
        userName={userName}
        backgroundColor={backgroundColor}
        backgroundImg={backgroundImg}
        setBackgroundColor={setBackgroundColor}
        setBackgroundImg={setBackgroundImg}
      />
    </>
  );
}

export default PostPage;
