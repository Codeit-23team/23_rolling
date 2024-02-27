import './textDropdown.css';
import Select from "react-select";

const TextDropdown = ({type}) => {
  const options = [
    { value: "test1", label: "테스트1" },
    { value: "test2", label: "테스트2" }
  ]
  const custom = {
    container : (provided) => ({
      ...provided,
      width: '320px',
    }),
    control : (provided, state) => ({
      display: 'flex',
      height: '50px',
      borderRadius: '8px',
      border: state.isFocused ? '2px solid #555' : '1px solid #ccc',
      '&:hover': {
        border: state.isFocused ? '2px solid #555' : '1px solid #555',
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 0 0 16px',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      paddingRight: '16px',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  }
  return (
    <div className='selectBox'>
      <strong className='formTitle'>{type}</strong>
      <Select options={options} styles={custom}/>
    </div>
  );
};

export default TextDropdown;
