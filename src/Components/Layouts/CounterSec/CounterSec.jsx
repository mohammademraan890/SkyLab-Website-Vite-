import React from 'react'
import CounterImgSec from '.././../CounterSecParts/CounterImgSec/CounterImgSec'
import CounterCircleSec from '.././../CounterSecParts/CounterCircleSec/CounterCircleSec'
import './CounterSec.css'
import SeactionsHeading from '../../Includes/SectionsHeading/SeactionsHeading'
const CounterSec = () => {
  return (
    <div className="counter-section">
    <div className=" custom-container counter-section-container ">
        <div className="row g-0">
            <div className="counter-sec-left col-md-6 col-12">
                <CounterImgSec />
            </div>

            <div className="counter-sec-right  col-md-6 col-12 ">
                <SeactionsHeading title="Trusuted Lab Experts and Latest Lab Tecknologies" Color="var(--rare-color)" maxWidth="90%" marginBtm="15px" />
                <p className="counter-right-desc-sec">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                    corrupti dignissimos quos harum architecto doloribus, dicta perspiciatis explicabo enim
                    adipisci, ipsum magnam aspernatur obcaecati cumque molestiae nulla, sapiente rem ad.</p>
               <CounterCircleSec />
            </div>
        </div>
    </div>
</div>

  )
}

export default CounterSec
