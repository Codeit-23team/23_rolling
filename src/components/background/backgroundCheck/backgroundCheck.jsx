import styles from './backgroundCheck.module.css';

function BackgroundCheck({ styled }) {
  return (
    <div className={`${styles.backgroundCheck} ${styles[styled]}`}>
      <div>
        <img className="checkIcon" src="images/check.svg" alt="checkIcon" />
      </div>
    </div>
  );
}

export default BackgroundCheck;
