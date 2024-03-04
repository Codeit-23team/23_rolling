import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, handleApi, linkName }) => {
  // const [goLink, setGoLink] = useState('');

  // useEffect(() => {
  //   if (buttonName === '구경해보기') {
  //     setGoLink('/list');
  //   } else if(buttonName === '나도 만들어보기') {
  //     setGoLink('/post');
  //   }
  // }, []);

  return (
    <Link to={linkName}>
      <button className="buttonPrimary56" onClick={handleApi}>
        {buttonName}
      </button>
    </Link>
  );
};

export default ButtonPrimary56;
