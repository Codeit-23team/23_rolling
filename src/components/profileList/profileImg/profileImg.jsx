import styles from './profileImg.module.css';

function ProfileImg({ imageUrl, imageCount }) {
  return (
    <div className={styles.profileImg}>
      {imageCount > 0 ? (
        <div>+{imageCount}</div>
      ) : (
        <div
          style={{
            background: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
      )}
    </div>
  );
}

export default ProfileImg;
