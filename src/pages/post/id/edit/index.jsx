/*
post/{id}/ 페이지의 index.jsx를 복사하여 가져온 후 + 휴지통 버튼 추가! 
*/
import Header from '../../../../components/header/header';
import PostidNav from '../../../../components/postId/PostidNav';
import PostidBody from '../../../../components/postId/PostidBody';
import { useParams } from 'react-router-dom';

function PostEditPage() {
  const { id } = useParams();

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} />
      <PostidBody id={id} optionDeleteButton={true} />
    </>
  );
}

export default PostEditPage;
