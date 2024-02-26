import './buttonOutlined40.css';

const ButtonOutlined40 = ({ iconUrl, buttonName }) => {
  console.log(iconUrl);
  return (
    <button className="buttonOutlined40">
      {iconUrl === undefined ? (
        buttonName
      ) : (
        <div className="iconBox">
          <img className="icon" src={iconUrl} alt="icon" />
          <span>{buttonName}</span>
        </div>
      )}
    </button>
  );
};

export default ButtonOutlined40;
