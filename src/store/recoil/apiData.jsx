import { selector, atom } from 'recoil';
import { profileImageRecipient } from '../../apis/apiRecipient';

export const profileImageData = selector({
  key: 'profileImageData',
  get: profileImageRecipient,
});

export const postUserId = atom({
  key: 'postUserId',
  default: '1',
});
