import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { postApiReaction } from '../../../apis/reactionApi';
import { useSetRecoilState } from 'recoil';
import { emojiAddModalState } from '../../../store/recoil/apiData';

const EmojiAddModal = ({ id }) => {
  const setEmojiModal = useSetRecoilState(emojiAddModalState);

  const HandleSelectEmoji = (data) => {
    const nativeEmoji = data.native;
    console.log('Selected Emoji:', nativeEmoji);
    postApiReaction(id, nativeEmoji, 'increase');
    setEmojiModal(false);
  };

  return (
    <>
      <Picker data={data} onEmojiSelect={HandleSelectEmoji} locale={'kr'} />
    </>
  );
};

export default EmojiAddModal;
