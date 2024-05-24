import { useMemo } from "react";
import "./LinkButton.css";

const LinkButton = ({
  className = "",
  container,
  egypt,
  from319GB,
  propMinWidth,
}) => {
  const egyptStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link-button17 ${className}`}>
      <div className="frame-parent100">
        <div className="container-wrapper7">
          <img className="container-icon18" alt="" src={container} />
        </div>
        <div className="egypt-parent">
          <div className="egypt" style={egyptStyle}>
            {egypt}
          </div>
          <div className="from-319gb">{from319GB}</div>
        </div>
      </div>
      <div className="svg-wrapper26">
        <img className="svg-icon78" alt="" src="/svg-5.svg" />
      </div>
    </div>
  );
};


export default LinkButton;
