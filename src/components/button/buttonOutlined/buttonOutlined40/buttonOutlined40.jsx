import styles from './buttonOutlined40.module.css';

const ButtonOutlined40 = ({ iconUrl, buttonName, onClick }) => {
  return (
    <button className={styles.buttonOutlined40} onClick={onClick}>
      {iconUrl === undefined ? (
        buttonName
      ) : (
        <div className={styles.iconBox}>
          <img className={styles.icon} src={iconUrl} alt="icon" />
          {buttonName !== undefined && <span>{buttonName}</span>}
        </div>
      )}
    </button>
  );
};

export default ButtonOutlined40;
