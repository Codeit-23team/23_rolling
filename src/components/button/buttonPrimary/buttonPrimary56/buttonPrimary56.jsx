import { Link } from 'react-router-dom';
import styles from './buttonPrimary56.module.css';

const ButtonPrimary56 = ({ buttonName, handleApi, linkName }) => {
  return (
    <Link to={linkName}>
      <button className={styles.buttonPrimary56} onClick={handleApi}>
        {buttonName}
      </button>
    </Link>
  );
};

export default ButtonPrimary56;
