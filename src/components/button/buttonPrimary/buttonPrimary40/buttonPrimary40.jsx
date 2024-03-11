import styles from './buttonPrimary40.module.css';

const ButtonPrimary40 = ({ buttonName, handleClick }) => {
  return (
    <button className={styles.buttonPrimary40} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default ButtonPrimary40;
