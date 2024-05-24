import "./LinkButton2.css";

const LinkButton2 = ({
  className = "",
  container,
  unitedStatesUSA,
  from159GB,
  onLinkButton2Click,
}) => {
  return (
    <div className={`link-button15 ${className}`} onClick={onLinkButton2Click}>
      <div className="frame-parent99">
        <div className="container-wrapper5">
          <img
            className="container-icon16"
            loading="lazy"
            alt=""
            src={container}
          />
        </div>
        <div className="container-parent5">
          <div className="container9">
            <div className="united-states-usa">{unitedStatesUSA}</div>
          </div>
          <div className="from-159gb2">{from159GB}</div>
        </div>
      </div>
      <div className="svg-wrapper24">
        <img className="svg-icon76" alt="" src="/svg-5.svg" />
      </div>
    </div>
  );
};


export default LinkButton2;
