import ProfileImg from '../profileImg/profileImg';
import styles from './profileBox.module.css';

function ProfileBox({ recentMessages, messageCount }) {
  return (
    <ul className={styles.profileBox}>
      {recentMessages.map((data) =>
        data.profileImageURL === null ? null : (
          <li key={data.id}>
            <ProfileImg imageUrl={data.profileImageURL} />
          </li>
        ),
      )}
      {messageCount <= 3 ? null : (
        <li className={styles.profileNum}>
          <ProfileImg imageCount={messageCount - 3} />
        </li>
      )}
    </ul>
  );
}

export default ProfileBox;
