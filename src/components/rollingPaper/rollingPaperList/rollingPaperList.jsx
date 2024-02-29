import { useEffect, useState } from 'react';
import { getApiRecipientList } from '../../../apis/apiRecipient';
import RollingPaperBox from '../rollingPaperBox/rollingPaperBox';
import './rollingPaperList.css';

function RollingPaperList({ name }) {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(results);
    });
  }, []);

  return (
    <div className="rollingPaperList">
      <h1>{name}</h1>
      <ul className="rollingPaperBoxList">
        {userData?.map((data) => (
          <li key={data.id}>
            <RollingPaperBox
              name={data.name}
              background={
                data.backgroundImageURL === null ? data.backgroundColor : data.backgroundImageURL
              }
              recentMessages={data.recentMessages}
              reactionCount={data.messageCount}
              topReactions={data.topReactions}
            />
          </li>
        ))}
      </ul>
      <button className="left">{`<`}</button>
      <button className="right">{`>`}</button>
    </div>
  );
}

export default RollingPaperList;
