import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from '../pages';
import PostPage from '../pages/post';
import PostIdPage from '../pages/post/id';
import PostMessagePage from '../pages/post/id/message';
import PostEditPage from '../pages/post/id/edit';
import ListPage from '../pages/list';
import SearchPage from '../pages/search';
import NotFoundPage from '../pages/notFound';
import { useEffect, useState } from 'react';
import { getApiRecipientList } from '../apis/apiRecipient';

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="post" element={<PostPage />} />
        <Route path="post/:id/message" element={<PostMessagePage />} />
        <Route path="post/:id/edit" element={<PostEditPage />} />
        <Route path="post/:id" element={<PostIdPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Path;
