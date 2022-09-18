import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./our-team.css";
import { Pagination } from "swiper";

import qvipleLogo from "../../assets/logo with tag line.svg";

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="title">Meet Our Team</div>
      {/* <div className="text screens-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </div> */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="team-member">
            <div className="team-member__name">Rutwik Shinde</div>
            <div className="team-member__position">Web Developer</div>
            <img src={qvipleLogo} alt="qviple logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-member">
            <div className="team-member__name">Rutwik Shinde</div>
            <div className="team-member__position">Web Developer</div>
            <img src={qvipleLogo} alt="qviple logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-member">
            <div className="team-member__name">Rutwik Shinde</div>
            <div className="team-member__position">Web Developer</div>
            <img src={qvipleLogo} alt="qviple logo" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurTeam;
