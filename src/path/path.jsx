import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../pages';
import PostPage from '../pages/post';
import PostIdPage from '../pages/post/id';

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:id" element={<PostIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
