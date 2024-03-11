import styles from './backgroundCheck.module.css';

function BackgroundCheck() {
  return (
    <div className={styles.backgroundCheck}>
      <img className="checkIcon" src="images/check.svg" alt="checkIcon" />
    </div>
  );
}

export default BackgroundCheck;
