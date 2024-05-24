import { useMemo } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  prop,
  heading4SignUpForYesimBus,
  createACorporateAccountAn,
  businessNeeds,
  prop1,
  heading4ESIMDeployment,
  distributeESIMProfilesToY,
  devicesNoMatterWhereTheyA,
  propDisplay,
  propMinWidth,
}) => {
  const heading4Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`item-parent1 ${className}`}>
      <div className="item21">
        <div className="background37">
          <b className="b7">{prop}</b>
        </div>
        <div className="heading-4-sign-up-for-yesim-parent">
          <div className="heading-416" style={heading4Style}>
            {heading4SignUpForYesimBus}
          </div>
          <div className="create-a-corporate-container">
            <span>
              <p className="create-a-corporate">{createACorporateAccountAn}</p>
              <p className="business-needs">{businessNeeds}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="item22">
        <div className="background38">
          <b className="b8">{prop1}</b>
        </div>
        <div className="heading-4-esim-deployment-parent">
          <b className="heading-417">{heading4ESIMDeployment}</b>
          <div className="distribute-esim-profiles-container">
            <p className="distribute-esim-profiles">
              {distributeESIMProfilesToY}
            </p>
            <p className="devices-no-matter">{devicesNoMatterWhereTheyA}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent7;
