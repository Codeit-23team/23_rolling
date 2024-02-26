import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element = {<Index/>}/>
      </Routes>    
    </BrowserRouter>
    )
}

export default App;
