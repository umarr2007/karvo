import React from "react";
import "./hero.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="swiper_box">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="swiper_wrapper">
                <div className="swiper_left">
                  <div className="swiper_logo_wrapper">
                    <img className="swiper_logo" src="/swiperlogo.svg" alt="" />
                  </div>
                  <h2 className="swiper_title">iPhone 15 Pro Max</h2>
                  <p className="swiper_text">Eng birinchi bizda!</p>
                </div>
                <div className="swiper_right">
                  <img className="swiper_img" src="/iphone.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_wrapper">
                <div className="swiper_left">
                  <div className="swiper_logo_wrapper">
                    <img className="swiper_logo" src="/swiperlogo.svg" alt="" />
                  </div>
                  <h2 className="swiper_title">iPhone 16 Pro Max</h2>
                  <p className="swiper_text">Eng birinchi bizda!</p>
                </div>
                <div className="swiper_right">
                  <img className="swiper_img" src="/iphone.svg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
