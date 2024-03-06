import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { postApiReaction } from '../../../apis/reactionApi';
import { useSetRecoilState } from 'recoil';
import { emojiModalState } from '../../../store/recoil/apiData';

const EmojiAddModal = ({ id }) => {
  const setEmojiModal = useSetRecoilState(emojiModalState);

  const HandleSelectEmoji = (data) => {
    const nativeEmoji = data.native;
    console.log('Selected Emoji:', nativeEmoji);
    postApiReaction(id, nativeEmoji, 'increase');
    setEmojiModal(false);
  };

  return (
    <>
      <Picker
        style={{ border: '1px solid #ccc', borderRadius: '5px' }}
        perLine={7}
        data={data}
        onEmojiSelect={HandleSelectEmoji}
        locale={'kr'}
      />
    </>
  );
};

export default EmojiAddModal;
