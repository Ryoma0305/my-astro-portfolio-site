import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <section>
      <div className="value-ttl-wrapper">
        <div className="value-ttl">
          <p className="value-ttl-text1 robot">My Value</p>
          <p className="value-ttl-text2">継続は力なり</p>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        loop={true}
        speed={6000}
        allowTouchMove={false}
        autoplay={{ delay: 0 }}
        pagination={{ el: ".swiper-pagination" }}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="/images/others-image2-2x.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/others-image4-2x.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/others-image3-2x.jpg" alt="" />{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}
