import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="title title-white">Our Happy Costumers</div>
      <div className="text text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="title">Akash Gupta</div>
            <div className="sub-title">Co-Founder</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="title">Akash Gupta</div>
            <div className="sub-title">Co-Founder</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-box">
            <div className="title">Akash Gupta</div>
            <div className="sub-title">Co-Founder</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
