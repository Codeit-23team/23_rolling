import TextInput from '../../components/textField/input/textInput';
import styles from './inputName.module.css';

function InputName({ type, setUserName, holdedrType }) {
  return (
    <div className={styles.inputName}>
      <form>
        <label htmlFor={type}>{`${type}.`}</label>
        <TextInput placeholder={holdedrType} setUserName={setUserName} />
      </form>
    </div>
  );
}

export default InputName;
