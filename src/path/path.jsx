import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from '../pages';
import PostPage from '../pages/post';
import PostIdPage from '../pages/post/id';
import PostMessagePage from '../pages/post/id/message';
import ListPage from '../pages/list';
import { useRecoilValue } from 'recoil';
import { userId } from '../store/recoil/apiData';

function Path() {
  const selectId = useRecoilValue(userId);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="post" element={<PostPage />}/>
        <Route path="post/:id" element={<div>테스트 페이지</div>} />
        <Route path="post/:id/message" element={<PostMessagePage />} />
        {/* <Route path={'post/' + selectId} element={<PostIdPage selectId={selectId} />} /> */}
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
