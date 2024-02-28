
import PostidNav from '../../../components/postId/PostidNav';
import PostidBody from '../../../components/postId/PostidBody';
import { useParams } from 'react-router-dom';

function PostIdPage() {
  const { id } = useParams();
  return (
    <>
      {/* <PostidNav id={id} /> */}
      <div><PostidBody></PostidBody></div>
    </>
  );
}

export default PostIdPage;
