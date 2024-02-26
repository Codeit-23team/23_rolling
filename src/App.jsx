import TextInput from './components/textField/input/textInput';
import TextDropdown from './components/textField/dropdown/textDropdown';
import ButtonSecondary40 from './components/button/buttonSecondary/buttonSecondary40';
import ButtonPrimary40 from './components/button/buttonPrimary/buttonPrimary40/buttonPrimary40';
import ButtonPrimary56 from './components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import ButtonOutlined56 from './components/button/buttonOutlined/buttonOutlined56/buttonOutlined56';
import ButtonOutlined40 from './components/button/buttonOutlined/buttonOutlined40/buttonOutlined40';

function App() {
  return (
    <>
      <TextInput></TextInput>
      <TextDropdown></TextDropdown>
      <ButtonSecondary40 buttonName={'s40'}></ButtonSecondary40>
      <ButtonPrimary40 buttonName={'p40'}></ButtonPrimary40>
      <ButtonPrimary56 buttonName={'p56'}></ButtonPrimary56>
      <ButtonOutlined56 buttonName={'o56'}></ButtonOutlined56>
      <ButtonOutlined40 iconUrl={'images/add-24.svg'} buttonName={'o40'}></ButtonOutlined40>
    </>
  );
}

export default App;
