import './textDropdown.css';
import Select from "react-select";
import { useState } from 'react';

const TextDropdown = ({type, options}) => {
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  // };
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
      padding: '0 16px',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  }
  return (
    <div className='selectBox'>
      <strong className='formTitle'>{type}</strong>
      <Select 
      options={options} 
      // onChange={handleChange}
      defaultValue={options.find(option => option.value === options[0].value)} 
      styles={custom}/>
    </div>
  );
};

export default TextDropdown;
