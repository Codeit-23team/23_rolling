import ReactDOM from 'react-dom';

//ModalPortal.jsx 생성
const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
