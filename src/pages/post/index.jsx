import Header from '../../components/header/header';
import InputName from '../../components/inputName/inputName';
import ChooseBackground from '../../components/chooseBackground/chooseBackground';

function PostPage() {
  return (
    <>
      <Header button={false} />
      <InputName type="To" />
      <ChooseBackground />
    </>
  );
}

export default PostPage;
