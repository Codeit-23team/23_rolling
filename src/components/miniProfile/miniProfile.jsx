import './miniProfile.css';

function miniProfile({ profileImageURL }) {
  return (
    <>
      <span className="miniProfile">
        <img src={profileImageURL} alt="profile" />
      </span>
    </>
  );
}

export default miniProfile;
