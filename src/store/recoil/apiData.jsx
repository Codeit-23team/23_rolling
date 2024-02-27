import { selector } from 'recoil';
import { getApiRecipient, postApiRecipient, deleteApiRecipient, profileImageRecipient } from '../../apis/apiRecipient';

export const profileImageData = selector({
    key: "profileImageData",
    get: profileImageRecipient,
});