import { useEffect, useState } from 'react';
import './profileImg.css';

function ProfileImg({ imageUrl, imageCount }) {
  return (
    <div className="profileImg">
      <img src={imageUrl === null ? imageCount : imageUrl} />
    </div>
  );
}

export default ProfileImg;
