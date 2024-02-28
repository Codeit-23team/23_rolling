import ButtonPrimary56 from '../components/button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import Header from '../components/header/header';
import IndexBottom from '../components/main/indexBottom';
import IndexTop from '../components/main/indexTop';


const Index = () => {
  return (
    <>
      <Header button={true} />
      <div className="indexContents">
        <IndexTop />
        <IndexBottom />
      </div>
      <div className="linkButtonCon">
        <ButtonPrimary56 goLink={'./list'} buttonName="구경해보기" />
      </div>
    </>
  );
};

export default Index;
