import React from 'react'
import './ProgressBar.css'
const ProgressBar = ({title, dataProgress}) => {
  return (
    <div className="progress-sec-bar w-100">
      <div className="progress-sec-top-counter d-flex align-items-center justify-content-between">
        <p>{title}</p>
        <span className="progress-counter">{dataProgress}%</span>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${dataProgress}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
