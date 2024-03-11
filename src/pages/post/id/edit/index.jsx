/*
post/{id}/ 페이지의 index.jsx를 복사하여 가져온 후 + 휴지통 버튼 추가! 
*/
import Header from '../../../../components/header/header';
import PostidNav from '../../../../components/postId/PostidNav';
import PostidBody from '../../../../components/postId/PostidBody';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApiMessage } from '../../../../apis/messageApi';

function PostEditPage() {
  const { id } = useParams();
  const [messageCount, setMessageCount] = useState(0);
  const [edit, setEdit] = useState(false);

  const fixCardData = () => {
    setEdit(true);
  };

  const getMessage = async () => {
    const MessageData = await getApiMessage(id);
    setMessageCount(MessageData.count);
  };

  useEffect(() => {
    getMessage();
    return setEdit(false);
  }, [edit]);

  return (
    <>
      <Header button={false} />
      <PostidNav id={id} num={messageCount} />
      <PostidBody id={id} optionDeleteButton={true} fixCardData={fixCardData} />
    </>
  );
}

export default PostEditPage;
