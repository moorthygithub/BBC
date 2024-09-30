import { baseURLgalimg } from "../../api";
import "./Gallery.css";

const Modal = ({
  clickedImg,
  handelRotationRight,
  handelRotationLeft,
  setClickedImg,
}) => {
  const handleClick = (e) => {
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("dismiss")
    ) {
      setClickedImg(null);
    }
  };

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="modal-content">
        <span className="dismiss" onClick={handleClick} aria-label="Close">
          &times;
        </span>
        <img
          src={baseURLgalimg + clickedImg}
          alt="Enlarged view"
          className="modal-image"
        />
        <div
          onClick={handelRotationLeft}
          className="overlay-arrows_left"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={handelRotationRight}
          className="overlay-arrows_right"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
