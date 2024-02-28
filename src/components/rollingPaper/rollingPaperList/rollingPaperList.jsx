import RollingPaperBox from '../rollingPaperBox/rollingPaperBox';
import './rollingPaperList.css';

function RollingPaperList({ name }) {
  const array = [
    {
      id: 2323,
      name: '강호순',
    },
    {
      id: 2324,
      name: '강호동',
    },
    {
      id: 2325,
      name: '홍길동',
    },
    {
      id: 2326,
      name: '홍길순',
    },
    {
      id: 2327,
      name: '여승구',
    },
  ];

  return (
    <div className="rollingPaperList">
      <h1>{name}</h1>
      <ul className="rollingPaperBoxList">
        {array?.map((arr, index) => (
          <li key={arr.id}>
            <RollingPaperBox />
          </li>
        ))}
      </ul>
      <button className="left">x</button>
      <button className="right">x</button>
    </div>
  );
}

export default RollingPaperList;
