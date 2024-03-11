import styles from './Reaction.module.css';

function Reaction({ emoji, count }) {
  return (
    <li className={styles.reaction}>
      <span>{emoji}</span>
      <span>{count}</span>
    </li>
  );
}

export default Reaction;
