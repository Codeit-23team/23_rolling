import Editor from "../../../../components/editor/editor";
import Header from "../../../../components/header/header";
import InputName from "../../../../components/inputName/inputName";
import ProfileImage from "../../../../components/profileImage/profileImage";
import TextDropdown from "../../../../components/textField/dropdown/textDropdown";
import './index.css';

const PostMessagePage = () => {
    return(
        <>
            <Header button={false}></Header>
            <div className="messageContainer">
                <InputName type={'From'} holdedrType={'이름을 입력해 주세요.'}/>
                <ProfileImage/>
                <TextDropdown type={'상대와의 관계'}/>
                <Editor type={'내용을 입력해주세요'}/>
            </div>
        </>
    )
}

export default PostMessagePage;