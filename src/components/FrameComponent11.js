import { useMemo } from "react";
import "./FrameComponent11.css";

const FrameComponent11 = ({
  className = "",
  overlayShadow,
  tOP10HotelsInTurkey2024,
  overview,
  linkImage,
  apr2024,
  minutesToRead,
  propWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`wrapper-overlayshadow-group ${className}`}
      style={frameDiv2Style}
    >
      <div className="wrapper-overlayshadow2">
        <img
          className="overlayshadow-icon2"
          loading="lazy"
          alt=""
          src={overlayShadow}
        />
      </div>
      <div className="top-10-hotels-container">
        <p className="top-10-hotels">{tOP10HotelsInTurkey2024}</p>
        <p className="overview">{overview}</p>
      </div>
      <div className="frame-parent40">
        <div className="frame-parent41">
          <div className="link-image-container">
            <img
              className="link-image2"
              loading="lazy"
              alt=""
              src={linkImage}
            />
          </div>
          <div className="vika-laki2">Vika Laki</div>
          <div className="div2">•</div>
          <div className="apr-20241">{apr2024}</div>
        </div>
        <div className="minutes-to-read2">{minutesToRead}</div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
  overlayShadow: PropTypes.string,
  tOP10HotelsInTurkey2024: PropTypes.string,
  overview: PropTypes.string,
  linkImage: PropTypes.string,
  apr2024: PropTypes.string,
  minutesToRead: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent11;
