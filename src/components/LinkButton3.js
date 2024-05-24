import { useMemo } from "react";
import "./LinkButton3.css";

const LinkButton3 = ({
  className = "",
  overlay,
  northAmerica,
  countries,
  propMinWidth,
}) => {
  const northAmericaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link-button31 ${className}`}>
      <div className="overlay-parent6">
        <img className="overlay-icon6" alt="" src={overlay} />
        <div className="container-parent13">
          <div className="container14">
            <div className="north-america" style={northAmericaStyle}>
              {northAmerica}
            </div>
          </div>
          <div className="countries8">{countries}</div>
        </div>
      </div>
      <div className="svg-wrapper40">
        <img className="svg-icon100" alt="" src="/svg-5.svg" />
      </div>
    </div>
  );
};

LinkButton3.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.string,
  northAmerica: PropTypes.string,
  countries: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default LinkButton3;
