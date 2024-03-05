import { useEffect, useState } from 'react';
import styles from './emojiShowModal.module.css';
import { getApiReaction } from '../../../apis/reactionApi';
import Reaction from '../../reaction/Reaction';
import { emojiModalState } from '../../../store/recoil/apiData';
import { useRecoilValue } from 'recoil';

const emojiShowModal = ({ id }) => {
  const [allReaction, setAllReaction] = useState([]);
  const emojiModal = useRecoilValue(emojiModalState);

  useEffect(() => {
    const getReactionAll = async () => {
      const reactionsData = await getApiReaction(id);
      setAllReaction(reactionsData.results);
    };
    getReactionAll();
    console.log(allReaction);
  }, [id, emojiModal]);

  return (
    <ul className={styles.emojies}>
      {allReaction.map(({ emoji, count, id }) => (
        <Reaction key={id} emoji={emoji} count={count} />
      ))}
    </ul>
  );
};

export default emojiShowModal;
