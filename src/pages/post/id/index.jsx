import Header from '../../../components/header/header';
import PostidNav from '../../../components/postId/PostidNav';
import PostidBody from '../../../components/postId/PostidBody';
import { getApiRecipientList } from '../../../apis/apiRecipient';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiMessage } from '../../../apis/messageApi';

function PostIdPage() {
  const { id } = useParams();
  const [messageCount, setMessageCount] = useState(0);
  const navigate = useNavigate();

  const getMessage = async () => {
    const MessageData = await getApiMessage(id);
    setMessageCount(MessageData.count);
  };

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      const ids = results.map((item) => item.id);
      if (!ids.includes(parseInt(id))) {
        navigate('/404');
        window.location.reload();
      }
    });
    getMessage();
  }, []);

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} num={messageCount} />
      <PostidBody id={id} />
    </>
  );
}

export default PostIdPage;
