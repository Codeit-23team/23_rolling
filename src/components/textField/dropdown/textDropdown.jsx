import { useEffect } from 'react';
import Select from 'react-select';

const TextDropdown = ({ setValue, type, options }) => {
  const handleChange = (selectedOption) => {
    setValue(selectedOption.value);
  };

  const custom = {
    container: (provided) => ({
      ...provided,
      'width': '320px',
      '@media screen and (max-width: 768px)': {
        width: '100%',
      },
    }),
    control: (provided, state) => ({
      'display': 'flex',
      'height': '50px',
      'borderRadius': '8px',
      'border': state.isFocused ? '2px solid #555' : '1px solid #ccc',
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
    option: (provided, state) => ({
      ...provided,
      'backgroundColor': state.isSelected || state.isFocused ? '#F6F6F6' : 'inherit',
      'color': state.isSelected ? '#181818' : '#181818',
      '&:hover': {
        backgroundColor: '#F6F6F6',
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: '0 16px',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
  };

  useEffect(() => {
    let defaultData = options.find((option) => option.value === options[0].value);
    setValue(defaultData.value);
  }, []);

  return (
    <div className="selectBox">
      <strong className="formTitle">{type}</strong>
      <Select
        options={options}
        onChange={handleChange}
        defaultValue={options.find((option) => option.value === options[0].value)}
        styles={custom}
      />
    </div>
  );
};

export default TextDropdown;
