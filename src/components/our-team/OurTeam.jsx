import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./our-team.css";
import { Pagination } from "swiper";

import qvipleLogo from "../../assets/logo with tag line.svg";

const teamMembers = [
  {
    name: "Pankaj Phad",
    position: "Founder and Chief Executive Officer",
  },
  {
    name: "Vikas Sanap",
    position: "Managing Director",
  },
  {
    name: "Abhishek Singh",
    position: "Chief Technical Officer",
  },
  {
    name: "Ankush Kumar Singh",
    position: "Product Lead",
  },
  {
    name: "Tushar Bhambere",
    position: "Application Lead",
  },
  {
    name: "Birat Dhar",
    position: "Chief Communications Officer",
  },
];

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
        {teamMembers.map((item, index) => (
          <SwiperSlide>
            <div key={index} className="team-member">
              <div className="team-member__name">{item.name}</div>
              <div className="team-member__position">{item.position}</div>
              <img src={qvipleLogo} alt="qviple logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
