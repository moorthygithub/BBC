import "./modal.module.css";
import { baseURLprimg } from "../../api";

const Modal = ({
  clickedImg,
  handelRotationRight,
  handelRotationLeft,
  setClickedImg,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <>
      <div
        className="overlay dismiss"
        onClick={handleClick}
        style={{ maxLines: "30px"}}
      >
        <img src={baseURLprimg + clickedImg} alt="bigger pic" style ={{width:"300px"}} />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default Modal;
