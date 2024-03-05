import './buttonPrimary40.css';

const ButtonPrimary40 = ({ buttonName, handleClick }) => {
  return (
    <button className="buttonPrimary40" onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default ButtonPrimary40;
