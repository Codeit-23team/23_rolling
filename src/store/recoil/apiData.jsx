import { atom } from 'recoil';
//import { getApiRecipient, postApiRecipient, deleteApiRecipient } from '../../api/apiRecipient';

export const userId = atom({
  key: 'userId',
  default: '1',
});
