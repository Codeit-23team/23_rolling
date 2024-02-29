import ProfileImg from './profileImg/profileImg';
import styles from './rollingPaperBox.module.css';
import Reaction from '../../reaction/Reaction';

function RollingPaperBox({ name, background, recentMessages, reactionCount, topReactions }) {
  const profileImage = recentMessages.map((data, index) => {
    if (index >= 2) {
      return null;
    } else {
      return data.profileImageURL;
    }
  });

  profileImage.map((data) => {
    data === null ? console.log(profileImage.length) : console.log(data);
  });

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
        {/* 나은님 컴포넌트 작성하셨음 ! */}
        {/*프로필 부분 미완성!!*/}
        <div className={styles.rollingProfileImgBox}>
          {profileImage.map((data) =>
            data === null ? (
              <ProfileImg imageCount={profileImage.length - 2} />
            ) : (
              <ProfileImg imageUrl={data} />
            ),
          )}
        </div>
        <div>{reactionCount}명이 작성했어요!</div>
      </div>
      {/* 나은님 컴포넌트 작성하셨음 ! */}
      {/*이모티콘 디자인 미완성!!*/}
      <ul className={styles.emoji}>
        {topReactions?.map((data) => (
          <Reaction key={data.id} emoji={data.emoji} count={data.count} />
        ))}
      </ul>
    </div>
  );
}

export default RollingPaperBox;
