import { useRecoilValueLoadable } from "recoil";
import { profileImageData } from "../../store/recoil/apiData";
import { useEffect, useState } from "react";
import './profileImage.css';

const ProfileImage = () => {
    const {contents} = useRecoilValueLoadable(profileImageData);
    const [newImage, setNewImage] = useState([]);
    const [clickImage, setClickImage] = useState('');

    const handleImageClick = (e) => {
        if(e.target.src === clickImage) {
            setClickImage(contents.imageUrls.slice(0, 1));
        } else {
            setClickImage(e.target.src);
        }
    }
    useEffect(() => {
        if (contents?.imageUrls?.length > 0) {
            setNewImage(contents.imageUrls.slice(1));
            setClickImage(contents.imageUrls.slice(0, 1));
        }
    }, [contents])
    return(
        <div className="profileImage">
            <strong className="formTitle">프로필 이미지</strong>
            <div className="profileImageBox">
                <div className="clickImageBox">
                    <img src={clickImage}/>
                </div>
                <div className="imageList">
                    <p>프로필 이미지를 선택해주세요!</p>
                    <ul>
                        {
                            newImage?.map((img, index) => {
                                return(
                                    <li key={index}>
                                        <button onClick={(e) => handleImageClick(e)} type="button">
                                            <img src={img} alt="프로필 이미지"/>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage;