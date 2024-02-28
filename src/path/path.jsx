
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from '../pages';
import PostPage from '../pages/post';
import PostIdPage from '../pages/post/id';
import PostMessagePage from '../pages/post/id/message';
import ListPage from '../pages/list';

function Path() {
<<<<<<< HEAD
=======
  const selectId = useRecoilValue(userId);

  console.log(`post/${selectId}`);

>>>>>>> 9d07facf89c3bcfbb775d67f5b557edbd41fa7e0
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="message" element={<PostMessagePage />} />
        <Route path="post" element={<PostPage />} />
<<<<<<< HEAD
=======
        <Route path="/post/:id" element={<PostIdPage />} />
>>>>>>> 9d07facf89c3bcfbb775d67f5b557edbd41fa7e0
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
