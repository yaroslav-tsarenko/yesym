import { useMemo } from "react";
import "./Background5.css";

const Background5 = ({
  className = "",
  coverageAndSpeedOfTheInte,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const sVGIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const verifiedPurchaserStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`background23 ${className}`}>
      <div className="frame-parent106">
        <div className="image-wrapper11">
          <img className="image-icon72" alt="" src="/image-21@2x.png" />
        </div>
        <div className="mohammed-h1">
          <span className="mohammed-h-txt-container1">
            <p className="mohammed1">Mohammed</p>
            <p className="h1">H.</p>
          </span>
        </div>
        <img className="container-icon21" alt="" src="/container-14.svg" />
      </div>
      <div className="frame-parent107">
        <div className="top-app-for-the-international-group">
          <div className="top-app-for-container3">
            <span className="top-app-for-container4">
              <p className="top-app-for2">Top app for the international</p>
              <p className="traveling1">traveling!</p>
            </span>
          </div>
          <p className="top-app-for-container5">
            <span className="top-app-for3">
              Top app for the international traveling! The
            </span>
            <span className="coverage-and-speed1">
              {coverageAndSpeedOfTheInte}
            </span>
            <span className="great-i-have1">
              great. I have tested it already in 6 countries
            </span>
            <span className="and-have-no1">
              and have no issues at all. Highly recommend.
            </span>
          </p>
        </div>
        <div className="svg-parent9">
          <img
            className="svg-icon81"
            alt=""
            src="/svg-18.svg"
            style={sVGIconStyle}
          />
          <div className="verified-purchaser10" style={verifiedPurchaserStyle}>
            Verified Purchaser · IOS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background5;
