import TestimonialLeft from '../../TestimonialSecParts/TestimonialLeft/TestimonialLeft'
import TestimonialSlider from '../../TestimonialSecParts/TestimonialSlider/TestimonialSlider'
import './TestimonialSec.css'
const TestimonialSec = () => {
  return (
    <div className="testimonial-sec" id='testimonial'>
    <div className=" custom-container testimonial-sec-container">
        <div className="row g-0 d-flex align-items-start">
            <div className="col-md-6 col-sm-12">
                <TestimonialLeft />
            </div>
            <div className="col-md-6 col-sm-12">
                <TestimonialSlider />
            </div>
        </div>
    </div>
</div>
  )
}

export default TestimonialSec
