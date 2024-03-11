import { useState } from 'react';
import styles from './textInput.module.css';
import { useRef } from 'react';

const TextInput = ({ placeholder, setUserName }) => {
  const [textOn, setTextOn] = useState(false);
  const inputRef = useRef();

  const handleUserName = (e) => {
    setUserName(e.target.value);
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
        className={textOn ? `${styles.textInput} ${styles.error}` : styles.textInput}
        placeholder={placeholder}
        onChange={handleUserName}
        onBlur={blurInput}
      />
      {textOn ? <p className={styles.errorInput}>값을 입력해 주세요.</p> : null}
    </>
  );
};

export default TextInput;
