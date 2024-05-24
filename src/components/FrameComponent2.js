import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  ourUsersFeedbackAboutESIM,
  yesim,
  propGap,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`section-inner5 ${className}`}>
      <div
        className="our-users-feedback-about-esim-group"
        style={frameDiv1Style}
      >
        <p className="our-users-feedback-container1">
          <span className="our-users-feedback1">
            {ourUsersFeedbackAboutESIM}
          </span>
          <span className="yesim6">{yesim}</span>
        </p>
        <div className="frame-wrapper17">
          <div className="button-svg-parent4">
            <img className="button-svg17" alt="" src="/button--svg-3.svg" />
            <img className="button-svg18" alt="" src="/button--svg-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  ourUsersFeedbackAboutESIM: PropTypes.string,
  yesim: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default FrameComponent2;
