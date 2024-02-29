import { useEffect, useState } from 'react';
import './PostidBody.css';
import { Link } from 'react-router-dom';
import { getApiMessage } from '../../apis/messageApi';
import plusButton from '@/Enabled.png';

const PostidBody = ({id}) => {
  // messageData 안에 데이터 있습니다! - 임동현
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    getApiMessage(id)
    .then(data => setMessageData(data.results))
  }, [])
  // console.log(messageData);
  return (
    <div className="postidBody">
      <ul className="row">
        <li className="box">
          <Link to="message">
            <img src={plusButton} alt='message 추가'/>
          </Link>
        </li>
        {/* <div className="messageBox">
          <h1>form. ~~</h1>
          <ul>
            <li>메세지블라블라</li>
          </ul>
        </div> */}
        {
          messageData?.map(({id}) => {
            return(
              <li key={id} className="messageBox">
                {id}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default PostidBody;
