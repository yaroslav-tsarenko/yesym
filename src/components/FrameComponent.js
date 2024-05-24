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
          <div className="link-genesis2">
            Genesis Group AG; Chamerstrasse 172, CH-6300 Zug; REG NO:
            CHE-135.623.633
          </div>
          <div className="backgroundshadow3">
            <p className="we-use-cookies-container2">
              <span>
                <span className="we-use-cookies-on-our-website2">
                  <span>
                    We use cookies on our website to give you the best browsing
                    experience.
                  </span>
                </span>
                <span className="by-clicking-accept-you-cons2">
                  <span>{`By clicking "Accept", you consent to the use of all cookies as outlined in our `}</span>
                  <span className="privacy-policy2">Privacy Policy</span>
                  <span className="span2">.</span>
                </span>
              </span>
            </p>
            <div className="backgroundshadow-inner1">
              <div className="button-parent2">
                <button className="button9" style={buttonStyle}>
                  <div className="accept2">Accept</div>
                </button>
                <button className="button10" style={button1Style}>
                  <div className="no-thanks2">No, thanks</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent;
