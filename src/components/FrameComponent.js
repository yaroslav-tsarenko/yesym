import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  propDebugCommit,
  propDebugCommit1,
  buttonDebugCommit,
  buttonDebugCommit1,
}) => {
  const linkStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const imageIcon2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const buttonStyle = useMemo(() => {
    return {
      debugCommit: buttonDebugCommit,
    };
  }, [buttonDebugCommit]);

  const button1Style = useMemo(() => {
    return {
      debugCommit: buttonDebugCommit1,
    };
  }, [buttonDebugCommit1]);

  return (
    <div className={`frame-parent114 ${className}`}>
      <div className="frame-parent115">
        <div className="frame-wrapper22">
          <div className="image-parent19">
            <img className="image-icon82" alt="" src="/image-33@2x.png" />
            <img className="image-icon83" alt="" src="/image-34@2x.png" />
            <img className="image-icon84" alt="" src="/image-35@2x.png" />
            <img className="image-icon85" alt="" src="/image-36@2x.png" />
            <img className="image-icon86" alt="" src="/image-37@2x.png" />
            <img className="image-icon87" alt="" src="/image-38@2x.png" />
          </div>
        </div>
        <div className="link-parent2">
          <div className="link7" style={linkStyle}>
            <div className="review-us-on-frame">
              <div className="review-us-on2">Review us on</div>
            </div>
            <img className="img-icon2" alt="" src="/img.svg" />
          </div>
          <div className="image-wrapper12">
            <img
              className="image-icon88"
              alt=""
              src="/image-39@2x.png"
              style={imageIcon2Style}
            />
          </div>
        </div>
      </div>
      <div className="frame-wrapper23">
        <div className="link-privacy-policy-container">
          <a className="link-privacy2">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent;
