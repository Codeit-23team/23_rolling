import Index from "../pages"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Path() {
    <BrowserRouter>      
        <Routes>
            <Route path="/" element = {<Index/>}/>
        </Routes>    
    </BrowserRouter>
}

export default Path;