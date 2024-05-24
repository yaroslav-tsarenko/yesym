import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./EnforcementSource.css";

const EnforcementSource = ({ className = "" }) => {
  return (
    <section className={`enforcement-source ${className}`}>
      <p className="the-source-of-container6">
        <b>The Source of Personal Data:</b>
        <span>
          {" "}
          law enforcement authorities or courts and/or other competent
          authorities.
        </span>
      </p>
      <div className="footer1">
        <FrameComponent4
          frameFooterPadding="unset"
          heading4TextDecoration="unset"
          linkAboutTextDecoration="unset"
        />
        <div className="link-terms2">Terms of Service</div>
        <div className="link-cof2">COF Agreement</div>
        <div className="yesim2">© 2019 - 2024 Yesim</div>
        <div className="social-media">
          <div className="social-links">
            <div className="image-gallery-wrapper">
              <div className="image-gallery">
                <img
                  className="image-icon46"
                  loading="lazy"
                  alt=""
                  src="/image-61@2x.png"
                />
                <img
                  className="image-icon47"
                  loading="lazy"
                  alt=""
                  src="/image-71@2x.png"
                />
                <img
                  className="image-icon48"
                  loading="lazy"
                  alt=""
                  src="/image-81@2x.png"
                />
                <img
                  className="image-icon49"
                  loading="lazy"
                  alt=""
                  src="/image-91@2x.png"
                />
                <img
                  className="image-icon50"
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
                <img
                  className="image-icon51"
                  loading="lazy"
                  alt=""
                  src="/image-111@2x.png"
                />
              </div>
            </div>
            <div className="review-link">
              <div className="link4">
                <div className="review-us-on-container">
                  <div className="review-us-on1">Review us on</div>
                </div>
                <img className="img-icon2" alt="" src="/img.svg" />
              </div>
              <div className="trust-pilot-logo">
                <img
                  className="image-icon52"
                  loading="lazy"
                  alt=""
                  src="/image-121@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="cookie-notice">
            <div className="cookie-content">
              <a className="link-privacy3">Privacy policy</a>
              <div className="link-genesis2">
                Genesis Group AG; Chamerstrasse 172, CH-6300 Zug; REG NO:
                CHE-135.623.633
              </div>
              <div className="backgroundshadow2">
                <p className="we-use-cookies-container2">
                  <span>
                    <span className="we-use-cookies-on-our-website2">
                      <span>
                        We use cookies on our website to give you the best
                        browsing experience.
                      </span>
                    </span>
                    <span className="by-clicking-accept-you-cons2">
                      <span>{`By clicking "Accept", you consent to the use of all cookies as outlined in our `}</span>
                      <span className="privacy-policy2">Privacy Policy</span>
                      <span className="span4">.</span>
                    </span>
                  </span>
                </p>
                <div className="cookie-buttons">
                  <div className="choice">
                    <button className="button12">
                      <div className="accept2">Accept</div>
                    </button>
                    <button className="button13">
                      <div className="no-thanks2">No, thanks</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

EnforcementSource.propTypes = {
  className: PropTypes.string,
};

export default EnforcementSource;
