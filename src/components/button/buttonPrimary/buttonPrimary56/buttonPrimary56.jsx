import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './buttonPrimary56.css';

const ButtonPrimary56 = ({ buttonName, handleApi, linkName }) => {
  return (
    <Link to={linkName}>
      <button className="buttonPrimary56" onClick={handleApi}>
        {buttonName}
      </button>
    </Link>
  );
};

export default ButtonPrimary56;
