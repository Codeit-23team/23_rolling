import styles from './messageModal.module.css';
import MessageBox from '../messageBox/messageBox';

const MessageModal = ({
  handleDeleteClick,
  optionDeleteButton,
  id,
  content,
  createdAt,
  profileImageURL,
  relationship,
  sender,
}) => {
  return (
    <div className={styles.messageModal}>
      <div className={styles.modalBox}>
        <div className={styles.content}>
          <MessageBox
            handleDeleteClick={handleDeleteClick}
            optionDeleteButton={optionDeleteButton}
            id={id}
            content={content}
            createdAt={createdAt}
            profileImageURL={profileImageURL}
            relationship={relationship}
            sender={sender}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
