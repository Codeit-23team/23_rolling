import { useEffect, useState } from 'react';
import styles from './emojiShowModal.module.css';
import { getApiReaction } from '../../../apis/reactionApi';
import Reaction from '../../reaction/Reaction';
import { emojiAddModalState } from '../../../store/recoil/apiData';
import { useRecoilValue } from 'recoil';

const emojiShowModal = ({ id }) => {
  const [allReaction, setAllReaction] = useState([]);
  const emojiModal = useRecoilValue(emojiAddModalState);

  useEffect(() => {
    const getReactionAll = async () => {
      const reactionsData = await getApiReaction(id);
      setAllReaction(reactionsData.results);
    };
    getReactionAll();
  }, [id, emojiModal]);

  useEffect(() => {
    console.log(allReaction);
  }, [allReaction]);
  return (
    <ul className={styles.emojies}>
      {allReaction.map(({ emoji, count, id }) => (
        <Reaction key={id} emoji={emoji} count={count} />
      ))}
    </ul>
  );
};

export default emojiShowModal;
