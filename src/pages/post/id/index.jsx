
import PostidNav from '../../../components/postId/PostidNav';
import { useParams } from 'react-router-dom';

function PostIdPage() {
  const { id } = useParams();
  return (
    <>
      <PostidNav id={id} />
      <div>아랫부분 : 가은님</div>
    </>
  );
}

export default PostIdPage;
