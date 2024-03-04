import Header from '../../../components/header/header';
import PostidNav from '../../../components/postId/PostidNav';
import PostidBody from '../../../components/postId/PostidBody';
import { useParams } from 'react-router-dom';

function PostIdPage() {
  const { id } = useParams();

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} />
      <PostidBody id={id}/>
    </>
  );
}

export default PostIdPage;
