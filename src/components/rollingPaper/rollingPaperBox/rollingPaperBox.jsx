import styles from './rollingPaperBox.module.css';
import Reaction from '../../reaction/Reaction';
import ProfileBox from '../../profileList/profilebox/profileBox';

function RollingPaperBox({ name, background, recentMessages, messageCount, topReactions }) {
  return (
    <div
      className={styles.rollingPaperBox}
      style={
        background.includes('http')
          ? {
              background: `url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          : {
              background: `var(--${background === 'beige' ? 'orange' : background}200)`,
            }
      }
    >
      <div className={styles.rollingPaperInfo}>
        <div>To. {name}</div>
        <ProfileBox recentMessages={recentMessages} messageCount={messageCount} />
        <div>{messageCount}명이 작성했어요!</div>
      </div>
      <ul className={styles.emoji}>
        {topReactions?.map((data) => (
          <Reaction key={data.id} emoji={data.emoji} count={data.count} />
        ))}
      </ul>
    </div>
  );
}

export default RollingPaperBox;
