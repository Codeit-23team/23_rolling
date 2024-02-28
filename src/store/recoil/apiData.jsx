import { selector, atom } from 'recoil';
import { profileImageRecipient } from '../../apis/apiRecipient';

export const profileImageData = selector({
    key: "profileImageData",
    get: profileImageRecipient,
});

export const userId = atom({
  key: 'userId',
  default: '1',
});
