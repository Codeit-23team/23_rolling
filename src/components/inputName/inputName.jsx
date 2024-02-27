import TextInput from '../../components/textField/input/textInput';
import './inputName.css';

function InputName({ type, setUserName }) {
  return (
    <div className="inputName">
      <form>
        <label htmlFor={type}>{`${type}.`}</label>
        <TextInput placeholder={'받는 사람 이름을 입력해 주세요'} setUserName={setUserName} />
      </form>
    </div>
  );
}

export default InputName;
