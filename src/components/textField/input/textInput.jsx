import { useState } from 'react';
import './textInput.css';

const TextInput = ({ placeholder, setUserName }) => {
  const [inputValue, setInputValue] = useState('');
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setInputValue(e.target.value);
  };

  return <input value={inputValue} className="textInput" placeholder={placeholder} onChange={handleUserName} />;
};

export default TextInput;
