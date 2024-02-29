import { useEffect, useState } from 'react';
import './profileImg.css';

function ProfileImg({ imageUrl, imageCount }) {
  console.log(imageCount);
  return (
    <div className="profileImg">
      {imageCount >= 0 ? (
        <div>+{imageCount}</div>
      ) : (
        <div
          style={{
            background: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      )}
    </div>
  );
}

export default ProfileImg;
