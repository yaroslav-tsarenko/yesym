import Background2 from "./Background2";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container2 ${className}`}>
      <div className="background14">
        <div className="background-child">
          <div className="frame-parent18">
            <div className="overlay-container">
              <div className="overlay1">
                <b className="b1">1</b>
              </div>
            </div>
            <div className="frame-parent19">
              <div className="frame-wrapper9">
                <div className="frame-parent20">
                  <div className="check-your-wrapper">
                    <b className="check-your">{`Check your `}</b>
                  </div>
                  <b className="device">device</b>
                </div>
              </div>
              <div className="frame-parent21">
                <div className="compatibility-wrapper">
                  <b className="compatibility">compatibility</b>
                </div>
                <div className="in-our-list"> in our list</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="image-icon22"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <Background2
        prop="2"
        chooseTheDestination="Choose the destination"
        andESIMDataPlan="and eSIM data plan"
        image="/image-1@2x.png"
      />
      <Background2
        prop="3"
        chooseTheDestination="Buy eSIM card most"
        andESIMDataPlan="suitable for your needs"
        image="/image-2@2x.png"
      />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
