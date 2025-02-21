import { useRef } from "react";
import "./ProgressSec.css";
import ProgressLeftSec from "../../ProgressSecParts/ProgressLeftSec/ProgressLeftSec";
import ProgressBarSec from "../../ProgressSecParts/ProgressBarSec/ProgressBarSec";

const ProgressSec = () => {
  const videoRef = useRef(null);

  const handleModalOpen = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play video when modal opens
    }
  };

  return (
    <div style={{ position: "relative" }} className="progress-section">
      <video
        id="progress-sec-video"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          width: "100vw",
          height: "100%",
          zIndex: -1,
          objectFit: "cover",
        }}
        src="/Assests/assets/videoBack.mp4"
        muted
        loop
      />

      <div className="custom-container progress-section-container">
        <div className="row g-0">
          <ProgressLeftSec />
          <div className="progress-section-right col-md-6 col-sm-12 d-flex align-items-center justify-content-between flex-column">
            <div
              className="d-md-flex d-none loader progress-play-btn align-items-center justify-content-center mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={handleModalOpen} // Trigger video play
            >
              <img src="/Assests/assets/play-button (1).png" alt="" />
            </div>
            <ProgressBarSec />
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-light border-5 rounded-0">
            <video ref={videoRef} src="/Assests/assets/modalVideo.mp4" muted></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSec;
