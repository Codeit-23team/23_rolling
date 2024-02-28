import ButtonPrimary56 from "../../../../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56";
import Editor from "../../../../components/editor/editor";
import Header from "../../../../components/header/header";
import InputName from "../../../../components/inputName/inputName";
import ProfileImage from "../../../../components/profileImage/profileImage";
import TextDropdown from "../../../../components/textField/dropdown/textDropdown";
import './index.css';

const PostMessagePage = () => {
    const relationshipOptions = [
        { value: "test1", label: "테스트1" },
        { value: "test2", label: "테스트2" }
    ]
    const fontOptions = [
        { value: "test1", label: "테스트1" },
        { value: "test2", label: "테스트2" }
    ]
    return(
        <>
            <Header button={false}></Header>
            <div className="messageContainer">
                <InputName type={'From'} holdedrType={'이름을 입력해 주세요.'}/>
                <ProfileImage/>
                <TextDropdown options={relationshipOptions} type={'상대와의 관계'}/>
                <Editor type={'내용을 입력해주세요'}/>
                <TextDropdown options={fontOptions} type={'폰트 선택'}/>
                <ButtonPrimary56 buttonName={'생성하기'}/>
            </div>
        </>
    )
}

export default PostMessagePage;