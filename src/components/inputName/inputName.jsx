import TextInput from '../../components/textField/input/textInput';
import './inputName.css';

function InputName({ type }) {
  return (
    <div className="inputName">
      <form>
        <label htmlFor={type}>{`${type}.`}</label>
        <TextInput placeholder={'받는 사람 이름을 입력해 주세요'} />
      </form>
    </div>
  );
}

export default InputName;
