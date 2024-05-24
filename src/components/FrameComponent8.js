import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  className = "",
  overlay,
  europe,
  countries,
  overlay1,
  asiaPacific,
  countries1,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  onLinkButton2Click,
}) => {
  const europeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const asiaPacificStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const countriesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`link-button-parent13 ${className}`}>
      <div className="link-button29" onClick={onLinkButton2Click}>
        <div className="overlay-parent4">
          <img className="overlay-icon4" alt="" src={overlay} />
          <div className="europe-group">
            <div className="europe1" style={europeStyle}>
              {europe}
            </div>
            <div className="countries6">{countries}</div>
          </div>
        </div>
        <div className="svg-wrapper38">
          <img className="svg-icon98" alt="" src="/svg-5.svg" />
        </div>
      </div>
      <div className="link-button30">
        <div className="overlay-parent5">
          <img className="overlay-icon5" alt="" src={overlay1} />
          <div className="container-parent12">
            <div className="container13">
              <div className="asia-pacific" style={asiaPacificStyle}>
                {asiaPacific}
              </div>
            </div>
            <div className="countries7" style={countriesStyle}>
              {countries1}
            </div>
          </div>
        </div>
        <div className="svg-wrapper39">
          <img className="svg-icon99" alt="" src="/svg-5.svg" />
        </div>
      </div>
    </div>
  );
};


export default FrameComponent8;
