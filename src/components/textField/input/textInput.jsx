import './textInput.css';

const TextInput = ({ placeholder, setUserName }) => {
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  return <input className="textInput" placeholder={placeholder} onChange={handleUserName} />;
};

export default TextInput;
