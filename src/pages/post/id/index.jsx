import Header from '../../../components/header/header';
import PostidNav from '../../../components/postId/PostidNav';
import PostidBody from '../../../components/postId/PostidBody';
import { getApiRecipientList, getApiRecipientOffset } from '../../../apis/apiRecipient';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiMessage } from '../../../apis/messageApi';

function PostIdPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  //const [messageCount, setMessageCount] = useState();

  //api에 id 값이 없으면 404페이지로 간다!
  useEffect(() => {
    getApiRecipientOffset(100, 0, '')
      .then((data) => {
        const ids = data.results.map((item) => item.id);
        if (!ids.includes(parseInt(id))) {
          navigate('/404');
          window.location.reload();
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  /*
  const getMessage = async () => {
    const MessageData = await getApiMessage(id);
    setMessageCount(MessageData.count);
  };
  */

  /*
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
  */

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} />
      <PostidBody id={id} />
    </>
  );
}

export default PostIdPage;
