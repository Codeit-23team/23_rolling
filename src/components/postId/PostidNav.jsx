import { useEffect, useState } from 'react';
import { getApiRecipient } from '../../apis/apiRecipient';
import { useParams } from 'react-router-dom';

function PostidNav() {
  const { id } = useParams();
  const [name, setname] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      const data = await getApiRecipient(id);
      setname(data.name);
    };

    getUserName();
  }, [id]); // id가 변경될 때마다 useEffect가 다시 실행되도록 함
  return (
    <>
      <div>
        <p>To. {name}</p>
      </div>
      <div>{/* 미니 프로필, 이모지, 공유 버튼 */}</div>
    </>
  );
}

export default PostidNav;
