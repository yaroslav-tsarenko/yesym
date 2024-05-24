import { useMemo } from "react";
import "./Background4.css";

const Background4 = ({
  className = "",
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const henrikeMStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const containerIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const sVGIcon1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const verifiedPurchaser1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className={`background24 ${className}`}>
      <div className="image-parent13">
        <img className="image-icon73" alt="" src="/image-21@2x.png" />
        <div className="frame-wrapper20">
          <div className="henrike-m-group">
            <div className="henrike-m1" style={henrikeMStyle}>
              Henrike M.
            </div>
            <img
              className="container-icon22"
              alt=""
              src="/container-15.svg"
              style={containerIconStyle}
            />
          </div>
        </div>
      </div>
      <div className="frame-parent108">
        <div className="international-esim-gives-the-f-group">
          <p className="international-esim-gives-container3">
            <span className="international-esim-gives-container4">
              <span className="international-esim-gives2">
                International eSIM gives the
              </span>
              <span className="flexibility-i-was1">
                flexibility I was looking for
              </span>
            </span>
          </p>
          <p className="international-esim-gives-container5">
            <span>
              <span className="international-esim-gives3">
                International eSIM gives the flexibility I was
              </span>
              <span className="looking-for-as1">
                looking for. As a frequent traveler who goes
              </span>
              <span className="to-different-locations1">
                to different locations this saves me a lot of
              </span>
              <span className="trouble-buying-packages1">
                trouble buying packages.
              </span>
            </span>
          </p>
        </div>
        <div className="svg-parent10">
          <img
            className="svg-icon82"
            alt=""
            src="/svg-18.svg"
            style={sVGIcon1Style}
          />
          <div className="verified-purchaser11" style={verifiedPurchaser1Style}>
            Verified Purchaser · IOS
          </div>
        </div>
      </div>
    </div>
  );
};



export default Background4;
