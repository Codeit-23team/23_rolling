import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostidNav from '../components/postId/PostidNav';
import Index from '../pages';
import PostPage from '../pages/post';

function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="post" element={<PostPage />}>
                    <Route path=":id" element={<PostidNav />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Path;
