import { HeroSliderData } from "../Data/Data";
import Buttons from "../Includes/Button/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroSlider.css";
const HeroSlider = () => {
  return (
    <div>
      <div className="hero-section d-flex align-items-center justify-content-start">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={1}
          navigation
          loop
          className="hero_section-container"
        >
          {HeroSliderData?.map((slide, index) => (
            <SwiperSlide key={slide.id}>
            <div
              className={`hero-section-slider hero-section-slide`}
              style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.backImage})`,
             
            }}
            >
              <div className="custom-container">
                <div
                  className={`hero-section-slider-slide d-flex flex-column ${
                    index % 2 === 0
                      ? "align-items-sm-start text-sm-start"
                      : "align-items-sm-end text-sm-end"
                  } align-items-center text-center`}
                >
                  <h1 className="fw-bolder">{slide?.title}</h1>
                  <p>{slide?.description}</p>
                  <Buttons title={"Explore More"} margin={"50px 0px 0px 0px"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
