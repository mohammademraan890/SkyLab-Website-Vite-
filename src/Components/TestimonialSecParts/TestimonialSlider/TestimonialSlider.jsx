import { TestimonialsSliderData } from "../../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  return (
    <div className="testimonial-sec-right">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation]} 
       
      >
        {TestimonialsSliderData?.map((testimonial) => (
          <SwiperSlide key={testimonial?.id}>
            <div className="testimonial-slider-inner">
              <div className="testimonial-slider-top-sec">
                <div className="testimonial-sec-slider-icon">
                  {testimonial?.svg}
                  <div className="circle rounded-circle"></div>
                </div>
              </div>
              <div className="testimonial-slider-center-sec">
                <p>{testimonial?.text}</p>
              </div>
              <div className="testimonial-slider-bottom-sec d-flex align-items-center">
                <div className="testimonial-slider-profile-img">
                  <img src={testimonial?.image} alt={testimonial?.name} />
                </div>
                <div className="testimonial-slider-profile-text">
                  <h4 className="fw-bold">{testimonial?.name}</h4>
                  <p>{testimonial?.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="testimonial-sec-slider-nav d-flex align-items-center">
        <div className="swiper-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </div>
        <div className="swiper-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
