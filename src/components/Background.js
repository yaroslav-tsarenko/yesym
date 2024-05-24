import { useMemo } from "react";
import "./Background.css";

const Background = ({ className = "", propDebugCommit, propDebugCommit1 }) => {
  const imageIcon1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const tinaMStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`background28 ${className}`}>
      <div className="frame-parent112">
        <div className="image-parent17">
          <img
            className="image-icon77"
            alt=""
            src="/image-21@2x.png"
            style={imageIcon1Style}
          />
          <div className="tina-m-container">
            <div className="tina-m1" style={tinaMStyle}>
              Tina M.
            </div>
          </div>
        </div>
        <div className="thanks-for-the-user-friendly-a-group">
          <p className="thanks-for-the-container3">
            <span>
              <span className="thanks-for-the2">
                Thanks for the user-friendly app
              </span>
              <span className="and-great1">and great</span>
            </span>
          </p>
          <div className="thanks-for-the-container4">
            <span className="thanks-for-the-container5">
              <p className="thanks-for-the3">
                Thanks for the user-friendly app and great,
              </p>
              <p className="and-very-high1">and very high quality support!</p>
            </span>
          </div>
        </div>
      </div>
      <div className="svg-parent14">
        <img className="svg-icon86" alt="" src="/svg-18.svg" />
        <div className="verified-purchaser-android-wrapper3">
          <div className="verified-purchaser15">
            Verified Purchaser · Android
          </div>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default Background;
