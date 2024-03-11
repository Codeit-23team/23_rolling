import ButtonPrimary56 from '../../../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import Editor from '../../../../components/editor/editor';
import Header from '../../../../components/header/header';
import InputName from '../../../../components/inputName/inputName';
import ProfileImage from '../../../../components/profileImage/profileImage';
import TextDropdown from '../../../../components/textField/dropdown/textDropdown';
import './index.css';
import { useRecoilState } from 'recoil';
import {
  messageRelationship,
  messageFont,
  messageEditor,
  fromName,
  messageProfile,
} from '../../../../store/recoil/apiData';
import { messageApiRecipient } from '../../../../apis/apiRecipient';
import { useParams, useNavigate } from 'react-router-dom';

const PostMessagePage = () => {
  const [messageName, setMessageName] = useRecoilState(fromName);
  const [messageImage, setMessageImage] = useRecoilState(messageProfile);
  const [relationship, setRelationship] = useRecoilState(messageRelationship);
  const [editorData, setEditorData] = useRecoilState(messageEditor);
  const [choiceFont, setChoiceFont] = useRecoilState(messageFont);
  const { id } = useParams();
  const navigate = useNavigate();

  const relationshipOptions = [
    { value: '친구', label: '친구' },
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '가족', label: '가족' },
  ];

  const fontOptions = [
    { value: 'Noto Sans', label: 'Noto Sans' },
    { value: 'Pretendard', label: 'Pretendard' },
  ];

  const handlePostMessage = () => {
    if (
      messageName === '' ||
      editorData === '' ||
      editorData === '<p></p>' ||
      editorData === '<p><br></p>'
    ) {
      alert('빈칸의 내용을 입력해주세요.');
    } else {
      messageApiRecipient(messageName, messageImage, relationship, editorData, choiceFont, id).then(
        (response) => {
          const data = response;
          setEditorData('');
          setMessageName('');
          navigate(`/post/${id}`);
          return data;
        },
      );
    }
  };
  return (
    <>
      <Header button={false}></Header>
      <div className="messageContainer">
        <InputName
          setUserName={setMessageName}
          type={'From'}
          holdedrType={'이름을 입력해 주세요.'}
        />
        <ProfileImage profileImage={messageImage} setProfileImage={setMessageImage} />
        <TextDropdown
          setValue={setRelationship}
          options={relationshipOptions}
          type={'상대와의 관계'}
        />
        <Editor
          editorData={editorData}
          setEditorData={setEditorData}
          type={'내용을 입력해주세요'}
        />
        <TextDropdown setValue={setChoiceFont} options={fontOptions} type={'폰트 선택'} />
        <ButtonPrimary56 handleApi={handlePostMessage} buttonName={'생성하기'} />
      </div>
    </>
  );
};

export default PostMessagePage;
