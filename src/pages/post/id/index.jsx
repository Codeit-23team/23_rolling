<<<<<<< HEAD
function PostIdPage() {
  return (
    <>
      git
      <div>윗부분 : 나은님</div>
=======

import PostidNav from '../../../components/postId/PostidNav';
import { useParams } from 'react-router-dom';

function PostIdPage() {
  const { id } = useParams();
  return (
    <>
      <PostidNav id={id} />
>>>>>>> 9d07facf89c3bcfbb775d67f5b557edbd41fa7e0
      <div>아랫부분 : 가은님</div>
    </>
  );
}

export default PostIdPage;
