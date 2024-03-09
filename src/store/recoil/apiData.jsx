import { selector, atom } from 'recoil';
import { profileImageRecipient } from '../../apis/apiRecipient';

export const profileImageData = selector({
  key: 'profileImageData',
  get: profileImageRecipient,
});

// message 페이지 전역 변수 _ 임동현
export const fromName = atom({
  key: 'fromName',
  default: '',
});
export const messageProfile = atom({
  key: 'messageProfile',
  default: '',
});
export const messageRelationship = atom({
  key: 'messageRelationship',
  default: '',
});
export const messageEditor = atom({
  key: 'messageEditor',
  default: '',
});
export const messageFont = atom({
  key: 'messageFont',
  default: '',
});
// -----------------------

export const postUserId = atom({
  key: 'postUserId',
  default: '1',
});

//------ post/id페이지 emoji 추가 토글 상태) _ 권나은
export const emojiAddModalState = atom({
  key: 'emojiModalState',
  default: false,
});

export const shareModalState = atom({
  key: 'shareModalState',
  default: false,
});

export const toastState = atom({
  key: 'toastState',
  default: false,
});

// ------ 검색페이지 _ 임동현
export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const deleteState = atom({
  key: 'deleteState',
  default: true,
});
