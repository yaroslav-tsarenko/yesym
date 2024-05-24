import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  className = "",
  overlayShadow,
  bestDestinationsToVisitIn,
  prop,
  linkImage,
  apr2024,
  minutesToRead,
  propWidth,
  propMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const minutesToReadStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`wrapper-overlayshadow-parent ${className}`}
      style={frameDiv1Style}
    >
      <div className="wrapper-overlayshadow1">
        <img
          className="overlayshadow-icon1"
          loading="lazy"
          alt=""
          src={overlayShadow}
        />
      </div>
      <p className="best-destinations-to-container">
        <span className="best-destinations-to">
          {bestDestinationsToVisitIn}
        </span>
        <span className="span2">{prop}</span>
      </p>
      <div className="frame-parent38">
        <div className="frame-parent39">
          <div className="link-image-wrapper">
            <img
              className="link-image1"
              loading="lazy"
              alt=""
              src={linkImage}
            />
          </div>
          <div className="vika-laki1">Vika Laki</div>
          <div className="div1">•</div>
          <div className="apr-2024">{apr2024}</div>
        </div>
        <div className="minutes-to-read1" style={minutesToReadStyle}>
          {minutesToRead}
        </div>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
  overlayShadow: PropTypes.string,
  bestDestinationsToVisitIn: PropTypes.string,
  prop: PropTypes.string,
  linkImage: PropTypes.string,
  apr2024: PropTypes.string,
  minutesToRead: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent12;
