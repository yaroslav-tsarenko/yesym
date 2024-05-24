import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <div className={`background25 ${className}`}>
      <div className="image-parent14">
        <img className="image-icon74" alt="" src="/image-21@2x.png" />
        <div className="dietrich-c-container">
          <div className="dietrich-c1">Dietrich C.</div>
        </div>
      </div>
      <img className="container-icon23" alt="" src="/container-16.svg" />
      <div className="frame-parent109">
        <div className="i-have-used-it-in-several-euro-group">
          <p className="i-have-used-container2">
            <span>
              <span className="i-have-used2">I have used it in several</span>
              <span className="european-countries-without1">
                European countries without any
              </span>
              <span className="problem1">problem.</span>
            </span>
          </p>
          <p className="i-have-used-container3">
            <span>
              <span className="i-have-used3">
                I have used it in several European countries
              </span>
              <span className="without-any-problem1">
                without any problem. The Internet was fast
              </span>
              <span className="as-possible-from1">
                as possible from a local providers.
              </span>
            </span>
          </p>
        </div>
        <div className="svg-parent11">
          <img className="svg-icon83" alt="" src="/svg-18.svg" />
          <div className="verified-purchaser12">Verified Purchaser · IOS</div>
        </div>
      </div>
    </div>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
};

export default Background3;
