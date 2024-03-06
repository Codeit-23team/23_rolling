import Header from '../../../components/header/header';
import PostidNav from '../../../components/postId/PostidNav';
import PostidBody from '../../../components/postId/PostidBody';
import { getApiRecipientList } from '../../../apis/apiRecipient';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function PostIdPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      const ids = results.map((item) => item.id);
      if (!ids.includes(parseInt(id))) {
        navigate('/404');
        window.location.reload();
      }
    });
  }, []);

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} />
      <PostidBody id={id} />
    </>
  );
}

export default PostIdPage;
