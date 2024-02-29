import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { postApiReaction } from '../../../apis/messageApi';
import { useSetRecoilState } from 'recoil';
import { emojiModalState } from '../../../store/recoil/apiData';

const EmojiModal = ({ id }) => {
  const setEmojiModal = useSetRecoilState(emojiModalState);

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

export default EmojiModal;
