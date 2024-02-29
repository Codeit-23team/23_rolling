import './buttonOutlined40.css';

const ButtonOutlined40 = ({ iconUrl, buttonName, onClick }) => {
  return (
    <button className="buttonOutlined40" onClick={onClick}>
      {iconUrl === undefined ? (
        buttonName
      ) : (
        <div className="iconBox">
          <img className="icon" src={iconUrl} alt="icon" />
          {buttonName !== undefined && <span>{buttonName}</span>}
        </div>
      )}
    </button>
  );
};

export default ButtonOutlined40;
