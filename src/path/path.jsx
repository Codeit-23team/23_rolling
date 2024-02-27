import Index from '../pages';
import PostPage from '../pages/post';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PostMessagePage from '../pages/post/id/message';

function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path='message' element={<PostMessagePage/>} />
                <Route path="post" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Path;
