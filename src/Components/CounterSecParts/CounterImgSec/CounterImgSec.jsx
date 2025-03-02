import './CounterImgSec.css'
const CounterImgSec = () => {
  return (
    <div className="counter-left-img-sec">
    <div className="counter-images-top-sec d-flex align-items-center">
        <img className="counter-left-item" alt="Scientist looking through a microscope in a lab"
            src="https://storage.googleapis.com/a1aa/image/BBhZCsBq4DpMDdTOJwqf71wYkDlCDgXgLYjb1FCVG08Zbl4JA.jpg" />
        <img className="counter-left-item" alt="Scientist looking through a microscope in a lab"
            src="https://storage.googleapis.com/a1aa/image/J6ZJHjil1exybqEoKuMjbu0TWMey6SUHRZ9jg6C4bNtodfgnA.jpg" />
    </div>
    <div className="counter-images-bottom-sec d-flex align-items-center">
        <img className="counter-left-item" alt="Scientist working with lab equipment"
            src="https://storage.googleapis.com/a1aa/image/bEpyp9DQrQZ2NBGVFsFe1Qf3UseXg65WqMNF8ipmJ0FitVinA.jpg" />
        <div
            className="counter-left-bottom-content counter-left-item d-flex align-items-center justify-content-center flex-column">

            <div className="counter-left-bottom-icon position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-award" viewBox="0 0 16 16">
                    <path
                        d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                <div className="circle rounded-circle"></div>
            </div>
            <h2 className="counter-left-bottom-title fw-bold">25</h2>
            <p className="counter-left-bottom-desc">Years Experience</p>
        </div>
    </div>
</div>
  )
}

export default CounterImgSec
