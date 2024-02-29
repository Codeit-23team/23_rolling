import './PostidBody.css';
import { Link } from 'react-router-dom';

const PostidBody = () => {
  return (
    <div className="postidBody">
      <div className="row">
        <div className="box">
          <Link to="message">
            <button>+</button>
          </Link>
        </div>
        <div className="messageBox">
          <h1>form. ~~</h1>
          <ul>
            <li>메세지블라블라</li>
          </ul>
        </div>
        <div className="messageBox">
          <h1>form. ~~</h1>
          <ul>
            <li>메세지블라블라</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostidBody;
