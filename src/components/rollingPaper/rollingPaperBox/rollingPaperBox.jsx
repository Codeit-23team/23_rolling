import { useEffect, useState } from 'react';
import ProfileImg from './profileImg/profileImg';
import './rollingPaperBox.css';

function RollingPaperBox({ name, background, recentMessages, reactionCount, topReactions }) {
  const [imageCount, setImageCount] = useState(0);

  const profileImage = recentMessages.map((data, index) => {
    if (index >= 3) {
      return null;
    } else {
      return data.profileImageURL;
    }
  });

  useEffect(() => {
    setImageCount(profileImage.length - 2);
  }, []);

  return (
    <div
      className="rollingPaperBox"
      style={
        background.includes('http')
          ? {
              background: `url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          : {
              background: `var(--${background === 'beige' ? 'orange' : background}200)`,
            }
      }
    >
      <div className="rollingPaperInfo">
        <div>To. {name}</div>
        {/* 나은님 컴포넌트 작성하셨음 ! */}
        {/*프로필 부분 미완성!!*/}
        <ul className="profileImageBox">
          {profileImage.map((data) =>
            data === null ? null : (
              <li>
                <ProfileImg imageUrl={data} />
              </li>
            ),
          )}
          {imageCount < 0 ? null : (
            <li>
              <ProfileImg imageCount={imageCount} />
            </li>
          )}
        </ul>
        <div>{reactionCount}명이 작성했어요!</div>
      </div>
      {/* 나은님 컴포넌트 작성하셨음 ! */}
      {/*이모티콘 디자인 미완성!!*/}
      <div>{topReactions?.map((data) => data.emoji + data.count)}</div>
    </div>
  );
}

export default RollingPaperBox;
