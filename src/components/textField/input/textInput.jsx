import { useState } from 'react';
import './textInput.css';
import { useRef } from 'react';

const TextInput = ({ placeholder, setUserName }) => {
  const [textOn, setTextOn] = useState(false);
  const inputRef = useRef();

  const handleUserName = (e) => {
    setUserName(e.target.value);
    // console.log(inputRef.current.value);
  };
  const blurInput = () => {
    if (inputRef.current.value === '') {
      setTextOn(true);
    } else {
      setTextOn(false);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        className={textOn ? 'textInput error' : 'textInput'}
        placeholder={placeholder}
        onChange={handleUserName}
        onBlur={blurInput}
      />
      {textOn ? <p className="errorInput">값을 입력해 주세요.</p> : null}
    </>
  );
};

export default TextInput;
