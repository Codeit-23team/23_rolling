import { useEffect, useState, useRef } from 'react';
import { getApiRecipientList } from '../../../apis/apiRecipient';
import RollingPaperBox from '../rollingPaperBox/rollingPaperBox';
import './rollingPaperList.css';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function RollingPaperList({ name, buttonClass }) {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    getApiRecipientList().then((response) => {
      const { results } = response;
      setUserData(results);
    });
  }, []);

  SwiperCore.use([Navigation]);
  const swiperOptions = {
    navigation: {
      prevEl: `.${buttonClass}Prev`,
      nextEl: `.${buttonClass}Next`,
    },
  };
  return (
    <div className="rollingPaperList">
      <strong>{name}</strong>
      <div className="rollingPaperSwiperBox">
        <Swiper
          loop={true}
          className="rollingPaperBoxList"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          navigation
          {...swiperOptions}
        >
          {userData?.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/post/${data.id}`}>
                <RollingPaperBox
                  name={data.name}
                  background={
                    data.backgroundImageURL === null
                      ? data.backgroundColor
                      : data.backgroundImageURL
                  }
                  recentMessages={data.recentMessages}
                  messageCount={data.messageCount}
                  topReactions={data.topReactions}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`${buttonClass}Prev prev`}>
          <img src="/images/arrow_left.png" alt="왼쪽 슬라이드 버튼" />
        </button>
        <button className={`${buttonClass}Next next`}>
          <img src="/images/arrow_right.png" alt="오른쪽 슬라이드 버튼" />
        </button>
      </div>
    </div>
  );
}

export default RollingPaperList;
