import { useEffect, useState } from 'react';
import { dateChange } from '../../../utils/utilsFunction';
import ButtonPrimary40 from '../../button/buttonPrimary/buttonPrimary40/buttonPrimary40';
import styled from './messageModal.module.css';

const MessageModal = ({
  content,
  createdAt,
  profileImageURL,
  relationship,
  sender,
  handleMessageModalClick,
}) => {
  const [relationClass, setRelationClass] = useState('');

  const badgeClassName = styled[relationClass];

  useEffect(() => {
    if (relationship === '지인') {
      setRelationClass('acquaintance');
    } else if (relationship === `친구`) {
      setRelationClass('friend');
    } else if (relationship === '동료') {
      setRelationClass('colleague');
    } else if (relationship === '가족') {
      setRelationClass('family');
    }
  }, []);

  return (
    <>
      <div className={styled.messageModalTop}>
        <div className={styled.messageModalBox}>
          <div>
            <div className={styled.messageModalContents}>
              <img src={profileImageURL} alt="프로필 이미지" />
              <div>
                <p>
                  From.<strong>{sender}</strong>
                </p>
                <span className={badgeClassName}>{relationship}</span>
              </div>
              <p className={styled.messageDate}>{dateChange(createdAt)}</p>
            </div>
            <div
              className={styled.messageModalTextBox}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <div className={styled.modalButton}>
            <ButtonPrimary40 buttonName="확인" handleClick={handleMessageModalClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageModal;
