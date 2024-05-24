import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  className = "",
  overlay,
  southCaribbeanCruise,
  countries,
  overlay1,
  easternCaribbeanCruise,
  countries1,
  propAlignSelf,
  propGap,
  propFlex,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  onLinkButtonClick,
}) => {
  const container1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const linkButton1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const easternCaribbeanCruiseStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={`link-button-parent12 ${className}`}>
      <div className="link-button27" onClick={onLinkButtonClick}>
        <img className="overlay-icon2" loading="lazy" alt="" src={overlay} />
        <div className="container-parent10">
          <div className="container11" style={container1Style}>
            <div className="south-caribbean-cruise">{southCaribbeanCruise}</div>
          </div>
          <div className="countries4">{countries}</div>
        </div>
        <div className="svg-wrapper36">
          <img className="svg-icon96" alt="" src="/svg-5.svg" />
        </div>
      </div>
      <div className="link-button28" style={linkButton1Style}>
        <div className="overlay-parent3" style={frameDiv2Style}>
          <img className="overlay-icon3" alt="" src={overlay1} />
          <div className="container-parent11">
            <div className="container12">
              <div
                className="eastern-caribbean-cruise"
                style={easternCaribbeanCruiseStyle}
              >
                {easternCaribbeanCruise}
              </div>
            </div>
            <div className="countries5">{countries1}</div>
          </div>
        </div>
        <div className="svg-wrapper37">
          <img className="svg-icon97" alt="" src="/svg-5.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.string,
  southCaribbeanCruise: PropTypes.string,
  countries: PropTypes.string,
  overlay1: PropTypes.string,
  easternCaribbeanCruise: PropTypes.string,
  countries1: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,

  /** Action props */
  onLinkButtonClick: PropTypes.func,
};

export default FrameComponent9;
