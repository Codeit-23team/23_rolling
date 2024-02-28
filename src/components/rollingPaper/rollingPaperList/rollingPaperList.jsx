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
              backgroundColor={data.backgroundColor}
              reactionCount={data.reactionCount}
              topReactions={data.topReactions}
            />
          </li>
        ))}
        {/*array?.map((arr, index) => (
          <li key={arr.id}>
            <RollingPaperBox />
          </li>
        ))*/}
      </ul>
      <button className="left">{`<`}</button>
      <button className="right">{`>`}</button>
    </div>
  );
}

export default RollingPaperList;
