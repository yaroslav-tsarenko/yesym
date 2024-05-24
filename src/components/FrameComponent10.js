import { useMemo } from "react";
import "./FrameComponent10.css";

const FrameComponent10 = ({
  className = "",
  overlayShadow,
  sIMCardsInCanadaHowTo,
  connectToMobileInternetWh,
  traveling,
  linkImage,
  mar2024,
  minutesToRead,
  propMinWidth,
}) => {
  const minutesToRead1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`wrapper-overlayshadow-container ${className}`}>
      <div className="wrapper-overlayshadow3">
        <img
          className="overlayshadow-icon3"
          loading="lazy"
          alt=""
          src={overlayShadow}
        />
      </div>
      <p className="sim-cards-in-container">
        <span className="sim-cards-in">{sIMCardsInCanadaHowTo}</span>
        <span className="connect-to-mobile">{connectToMobileInternetWh}</span>
        <span className="traveling1">{traveling}</span>
      </p>
      <div className="frame-parent42">
        <div className="frame-parent43">
          <div className="link-image-frame">
            <img
              className="link-image3"
              loading="lazy"
              alt=""
              src={linkImage}
            />
          </div>
          <div className="vika-laki3">Vika Laki</div>
          <div className="div3">•</div>
          <div className="mar-2024">{mar2024}</div>
        </div>
        <div className="minutes-to-read3" style={minutesToRead1Style}>
          {minutesToRead}
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  overlayShadow: PropTypes.string,
  sIMCardsInCanadaHowTo: PropTypes.string,
  connectToMobileInternetWh: PropTypes.string,
  traveling: PropTypes.string,
  linkImage: PropTypes.string,
  mar2024: PropTypes.string,
  minutesToRead: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent10;
