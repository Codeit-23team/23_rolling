import { useEffect, useState } from 'react';
import { getApiRecipientList } from '../../../apis/apiRecipient';
import RollingPaperBox from '../rollingPaperBox/rollingPaperBox';
import './rollingPaperList.css';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function RollingPaperList({ name }) {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(results);
    });
  }, []);

  return (
    <div className="rollingPaperList">
      <h1>{name}</h1>
      {/* <ul className="rollingPaperBoxList">
        {userData?.map((data) => (
          <li key={data.id}>
            <Link to={`/post/${data.id}`}>
              <RollingPaperBox
                name={data.name}
                backgroundColor={data.backgroundColor}
                reactionCount={data.reactionCount}
                topReactions={data.topReactions}
              />
            </Link>
          </li>
        ))}
      </ul> */}
      <Swiper
        className='rollingPaperBoxList'
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {userData?.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/post/${data.id}`}>
              <RollingPaperBox
                name={data.name}
                backgroundColor={data.backgroundColor}
                reactionCount={data.reactionCount}
                topReactions={data.topReactions}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
}

export default RollingPaperList;
