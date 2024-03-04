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
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          : {
              background: `var(--${background === 'beige' ? 'orange' : background}200) url(images/pattern_${background}.svg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '142px 142px',
              backgroundPosition: 'right bottom',
            }
      }
    >
      <div
        className={styles.rollingPaperInfo}
        style={background.includes('http') ? { color: `var(--white)` } : { color: `var(--black)` }}
      >
        <div>To. {name}</div>
        <div className={styles.profileCount}>
          <ProfileBox recentMessages={recentMessages} messageCount={messageCount} />
        </div>
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
