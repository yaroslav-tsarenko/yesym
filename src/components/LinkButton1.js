import { useMemo } from "react";
import "./LinkButton1.css";

const LinkButton1 = ({
  className = "",
  propOverflowX,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const linkButtonStyle = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const containerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`link-button16 ${className}`} style={linkButtonStyle}>
      <div className="container-wrapper6">
        <img className="container-icon17" alt="" src="/container-1.svg" />
      </div>
      <div className="container-parent6" style={frameDivStyle}>
        <div className="container10" style={containerStyle}>
          <div className="united-arab-emirates2">
            United Arab Emirates (UAE)
          </div>
        </div>
        <div className="from-303gb">from $3.03/GB</div>
      </div>
      <div className="svg-wrapper25">
        <img className="svg-icon77" alt="" src="/svg-5.svg" />
      </div>
    </div>
  );
};

LinkButton1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propOverflowX: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default LinkButton1;
