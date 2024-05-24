import { useMemo } from "react";
import "./Background1.css";

const Background1 = ({ className = "", propDebugCommit, propDebugCommit1 }) => {
  const imageIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const arturKStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`background27 ${className}`}>
      <div className="container-parent8">
        <img className="container-icon25" alt="" src="/container-18.svg" />
        <div className="frame-parent111">
          <div className="image-parent16">
            <img
              className="image-icon76"
              alt=""
              src="/image-21@2x.png"
              style={imageIconStyle}
            />
            <div className="artur-k-container">
              <div className="artur-k1" style={arturKStyle}>
                Artur K.
              </div>
            </div>
          </div>
          <div className="this-is-what-the-modern-travel-group">
            <div className="this-is-what-container3">
              <span>
                <p className="this-is-what2">
                  This is what the modern traveller
                </p>
                <p className="needs1">needs.</p>
              </span>
            </div>
            <p className="this-is-what-container4">
              <span className="this-is-what-container5">
                <span className="this-is-what3">
                  This is what the modern traveller needs. No
                </span>
                <span className="dealing-with-expensive1">
                  dealing with expensive roaming, access in
                </span>
                <span className="every-country1">every country.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="svg-parent13">
        <img className="svg-icon85" alt="" src="/svg-18.svg" />
        <div className="verified-purchaser-android-wrapper2">
          <div className="verified-purchaser14">
            Verified Purchaser · Android
          </div>
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default Background1;
