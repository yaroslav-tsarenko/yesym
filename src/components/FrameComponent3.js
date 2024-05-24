import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  eSIMMobileDataPlansFor,
  tourismAndBusiness,
  propDisplay,
}) => {
  const eSIMMobileDataContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={`esim-mobile-data-plans-for-tou-parent ${className}`}>
      <h1
        className="esim-mobile-data-container"
        style={eSIMMobileDataContainerStyle}
      >
        <p className="esim-mobile-data">{eSIMMobileDataPlansFor}</p>
        <p className="tourism-and-business">{tourismAndBusiness}</p>
      </h1>
      <div className="frame-wrapper15">
        <div className="background-group">
          <div className="background18">
            <b className="inbounds">4.5</b>
            <div className="svg-wrapper22">
              <img className="svg-icon74" alt="" src="/svg-3.svg" />
            </div>
          </div>
          <div className="k-ratings-container">
            <div className="k-ratings1">10K+ ratings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  eSIMMobileDataPlansFor: PropTypes.string,
  tourismAndBusiness: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
};

export default FrameComponent3;
