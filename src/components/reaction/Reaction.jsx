import './Reaction.css';

function Reaction({ emoji, count }) {
  return (
    <li className="reaction">
      <span>{emoji}</span>
      <span>{count}</span>
    </li>
  );
}

export default Reaction;
