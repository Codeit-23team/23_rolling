import Index from '../pages';
import PostPage from '../pages/post';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
