import TextInput from '../../components/textField/input/textInput';
import './inputName.css';

function InputName({ type, setUserName, holdedrType }) {
  return (
    <div className="inputName">
      <form>
        <label htmlFor={type}>{`${type}.`}</label>
        <TextInput placeholder={holdedrType} setUserName={setUserName} />
      </form>
    </div>
  );
}

export default InputName;
